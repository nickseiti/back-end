import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';

export type ComicChapterDocument = ComicChapter & Document;
@Schema({ timestamps: true })
export class ComicChapter {
  @Transform(({ value }) => value.toString())
  _id?: string;

  @Prop({ required: true, type: String })
  comicId: string;

  @Prop({ required: true, type: String })
  storyName: string;

  @Prop({ required: true, type: String, minlength: 5, maxlength: 100 })
  title: string;

  @Prop({ required: true, type: [String], isArray: true })
  chapterImages: string[];

  @Prop({ required: true, type: Number })
  chapter: number;

  @Prop({ required: true, type: Number })
  views: number;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const ComicChapterSchema = SchemaFactory.createForClass(ComicChapter);
