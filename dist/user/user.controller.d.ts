import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'src/common/interceptor/response.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(pageSize: string, pageNumber: string, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<Response<User[]>>;
    findOne(id: string): Promise<Response<User>>;
    create(createUserDto: CreateUserDto): Promise<Response<User>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<Response<User>>;
    remove(id: string): Promise<void>;
}
