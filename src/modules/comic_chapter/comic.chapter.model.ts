import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class ComicChapter {
  _id?: string;

  @Prop({ type: String })
  comicId: string;

  @Prop({ type: String })
  storyName: string;

  @Prop({ type: String, minlength: 5, maxlength: 100 })
  title: string;

  @Prop({ type: String, isArray: true })
  images: string[];

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
