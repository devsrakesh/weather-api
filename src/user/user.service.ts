import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon from 'argon2';
import { Response } from 'src/common/interceptor/response.interface';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private auth: AuthService,
  ) {}

  async findAll(
    pageSize: string,
    pageNumber: string,
    sortBy: string = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'asc',
  ): Promise<User[]> {
    try {
      const skip = (parseInt(pageNumber) - 1) * parseInt(pageSize);
      const sortOptions = {};
      sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

      console.log('🚀 ~ UserService ~ pageSize:', typeof parseInt(pageSize));
      const data = await this.userModel
        .aggregate([
          { $sort: sortOptions },
          { $skip: skip },
          { $limit: parseInt(pageSize) },
        ])
        .exec();
      console.log('🚀 ~ UserService ~ User:', data);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while retrieving users.',
      );
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found.`);
      }
      return user;
    } catch (error) {
      if (error.name === 'CastError') {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }
      throw new InternalServerErrorException(
        'An error occurred while retrieving the user.',
      );
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const existingUser = await this.userModel.findOne({
        email: createUserDto.email,
      });
      if (existingUser) {
        throw new ConflictException('Email is already in use');
      }

      // Hash the password
      createUserDto.password = await argon.hash(createUserDto.password);

      // Create and save the new user
      const createdUser = new this.userModel(createUserDto);
      const response = await createdUser.save();
      console.log('createdUser', createdUser);

      const { accessToken, refreshToken } = await this.auth.generateTokens(
        createdUser._id,
        createdUser.email,
      );
      console.log('refreshToken', refreshToken, createdUser);

      await this.auth.updateRefreshToken(createdUser._id, refreshToken);
      return response;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'An error occurred while creating the user.',
      );
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const updatedUser = await this.userModel
        .findByIdAndUpdate(id, updateUserDto, { new: true })
        .exec();
      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${id} not found.`);
      }
      return updatedUser;
    } catch (error) {
      if (error.name === 'CastError') {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }
      throw new InternalServerErrorException(
        'An error occurred while updating the user.',
      );
    }
  }

  async remove(id: string): Promise<User> {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
      if (!deletedUser) {
        throw new NotFoundException(`User with ID ${id} not found.`);
      }
      return deletedUser;
    } catch (error) {
      if (error.name === 'CastError') {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }
      throw new InternalServerErrorException(
        'An error occurred while deleting the user.',
      );
    }
  }
}
