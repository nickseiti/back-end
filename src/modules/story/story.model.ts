import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import { Novel, NovelSchema } from '../novel/novel.model';
import { Comic, ComicSchema } from '../comic/comic.model';

export type StoryDocument = Story & Document;
@Schema({ timestamps: true })
export class Story {
  @Transform(({ value }) => value.toString())
  _id?: string;

  @Prop({ maxlength: 100, minlength: 5, unique: true })
  name: string;

  @Prop({ type: Date })
  createdAt?: Date;

  @Prop({ type: Date })
  updatedAt?: Date;

  @Prop({
    type: NovelSchema,
  })
  @Type(() => Novel)
  novel?: Novel;

  @Prop({
    type: ComicSchema,
  })
  @Type(() => Comic)
  comic?: Comic;
}

export const StorySchema = SchemaFactory.createForClass(Story);
