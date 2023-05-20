import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';

export type NovelChapterDocument = NovelChapter & Document;
@Schema({ timestamps: true })
export class NovelChapter {
  @Transform(({ value }) => value.toString())
  _id?: string;

  @Prop({ type: String })
  novelId: string;

  @Prop({ type: String, minlength: 5, maxlength: 100 })
  storyName: string;

  @Prop({ type: String, minlength: 5, maxlength: 100 })
  title: string;

  @Prop({ type: String, minlength: 5 })
  context: string;

  @Prop({ type: Number })
  chapter: number;

  @Prop({ type: Number })
  views: number;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const NovelChapterSchema = SchemaFactory.createForClass(NovelChapter);
