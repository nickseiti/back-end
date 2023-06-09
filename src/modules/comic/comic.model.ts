import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ComicChapter } from '../comic_chapter/comic.chapter.model';
import { Transform, Type } from 'class-transformer';

export type ComicDocument = Comic & Document;

Schema({ timestamps: true });
export class Comic {
  @Transform(({ value }) => value.toString())
  _id?: string;

  @Prop({ type: String, unique: true })
  storyId: string;

  @Prop({ type: String, maxlength: 100, minlength: 5, unique: true })
  storyName: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: ComicChapter.name,
    isArray: true,
  })
  @Type(() => ComicChapter)
  chapters?: ComicChapter[];

  @Prop({ type: Number })
  views: number;

  @Prop({ type: Boolean })
  complete: boolean;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;
}

export const ComicSchema = SchemaFactory.createForClass(Comic);
