import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';

export type ComicChapterDocument = ComicChapter & Document;
@Schema({ timestamps: true })
export class ComicChapter {
  @Transform(({ value }) => value.toString())
  _id?: string;

  @Prop({ type: String })
  comicId: string;

  @Prop({ type: String })
  storyName: string;

  @Prop({ type: String, minlength: 5, maxlength: 100 })
  title: string;

  @Prop({ type: [String], isArray: true })
  chapterImages: string[];

  @Prop({ type: Number })
  chapter: number;

  @Prop({ type: Number })
  views: number;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const ComicChapterSchema = SchemaFactory.createForClass(ComicChapter);
