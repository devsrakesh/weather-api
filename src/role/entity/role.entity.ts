import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ResourcePermission } from '../interface/permission.interface';

@Schema()
export class Role {
  @Prop({ required: true })
  name: string;

  @Prop({})
  role: string;

  @Prop({ type: [Object], default: [] })
  permissions: ResourcePermission[];
}

export type RoleDocument = Role & Document;
export const RoleSchema = SchemaFactory.createForClass(Role);
