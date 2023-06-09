import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Novel } from '../novel/novel.model';
import { Comic } from '../comic/comic.model';
import mongoose from 'mongoose';

export type StoryDocument = Story & Document;
@Schema({ timestamps: true })
export class Story {
  @Transform(({ value }) => value.toString())
  _id?: string;

  @Prop({ required: true, maxlength: 100, minlength: 5, unique: true })
  name: string;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Novel',
  })
  @Type(() => Novel)
  novel?: Novel;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comic',
  })
  @Type(() => Comic)
  comic?: Comic;
}

export const StorySchema = SchemaFactory.createForClass(Story);
