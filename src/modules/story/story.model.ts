import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Novel } from '../novel/novel.model';
import { Comic } from '../comic/comic.model';

@Schema({ timestamps: true })
export class Story {
  _id?: string;

  @Prop({ maxlength: 100, minlength: 5, unique: true })
  name: string;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Novel.name,
  })
  novel?: Novel;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Comic.name,
  })
  comic?: Comic;
}

export const StorySchema = SchemaFactory.createForClass(Story);
