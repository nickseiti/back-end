import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';

export type NovelChapterDocument = NovelChapter & Document;
@Schema({ timestamps: true })
export class NovelChapter {
  @Transform(({ value }) => value.toString())
  _id?: string;

  @Prop({ required: true, type: String })
  novelId: string;

  @Prop({ required: true, type: String, minlength: 5, maxlength: 100 })
  storyName: string;

  @Prop({ required: true, type: String, minlength: 5, maxlength: 100 })
  title: string;

  @Prop({ required: true, type: String, minlength: 5 })
  context: string;

  @Prop({ required: true, type: Number })
  chapter: number;

  @Prop({ required: true, type: Number })
  views: number;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const NovelChapterSchema = SchemaFactory.createForClass(NovelChapter);
