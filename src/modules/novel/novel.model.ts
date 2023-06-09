import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { NovelChapter } from '../novel_chapter/novel.chapter.model';
import { Transform, Type } from 'class-transformer';

export type NovelDocument = Novel & Document;
@Schema({ timestamps: true })
export class Novel {
  @Transform(({ value }) => value.toString())
  _id?: string;

  @Prop({ required: true, type: String, unique: true })
  storyId: string;

  @Prop({
    required: true,
    type: String,
    maxlength: 100,
    minlength: 5,
    unique: true,
  })
  storyName: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: NovelChapter.name }],
  })
  @Type(() => NovelChapter)
  chapters?: NovelChapter[];

  @Prop({ required: true, type: Number })
  views: number;

  @Prop({ required: true, type: Boolean, default: false })
  complete: boolean;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const NovelSchema = SchemaFactory.createForClass(Novel);
