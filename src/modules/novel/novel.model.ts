import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { NovelChapter } from '../novel_chapter/novel.chapter.model';

@Schema({ timestamps: true })
export class Novel {
  _id?: string;

  @Prop({ type: String, unique: true })
  storyId: string;

  @Prop({ type: String, maxlength: 100, minlength: 5, unique: true })
  storyName: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: NovelChapter.name,
    isArray: true,
  })
  chapters?: NovelChapter[];

  @Prop({ type: Number })
  views: number;

  @Prop({ type: Boolean, default: false })
  complete: boolean;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const NovelSchema = SchemaFactory.createForClass(Novel);
