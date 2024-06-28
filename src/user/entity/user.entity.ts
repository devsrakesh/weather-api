// user.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;
@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
})
export class User {
  @Prop({})
  userId: string;

  @Prop({})
  userImage: string;

  @Prop({ required: true })
  password: string;

  @Prop({})
  refreshToken: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({})
  name: string;

  @Prop({})
  contactNumber: string;

  @Prop({})
  Address: string;

  @Prop({})
  city: string;

  @Prop({})
  state: string;

  @Prop({})
  country: string;

  @Prop({})
  pinCode: string;

  @Prop({ type: Types.ObjectId })
  orgId: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  role: Types.ObjectId;

  @Prop()
  Designation: string;

  @Prop()
  Qualification: string;

  @Prop()
  Experience: string;

  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;

  @Prop({})
  createdBy: Types.ObjectId;

  @Prop({})
  updatedBy: Types.ObjectId;
}
export const UserSchema = SchemaFactory.createForClass(User);
