import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Organization extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: 'educational' })
  type: string;

  @Prop({ type: Types.ObjectId })
  orgId: Types.ObjectId;

  @Prop()
  email: string;

  @Prop()
  contactNo: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  address: string;

  @Prop()
  zipcode: string;

  @Prop()
  logoUrl: string;

  @Prop()
  orgUrl: string;

  @Prop()
  headName: string;

  @Prop()
  headContact: string;

  @Prop()
  headEmail: string;

  @Prop()
  headPosition: string;

  @Prop({ default: 'active' })
  status: string;

  @Prop({ type: Types.ObjectId })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  updatedBy: Types.ObjectId;

  @Prop({ default: Date.now })
  dateCreated: Date;

  @Prop({ default: Date.now })
  dateUpdated: Date;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
