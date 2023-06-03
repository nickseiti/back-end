import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class UpdateComicChapterDTO {
  @ApiProperty({ required: true, type: String })
  id: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The chapter should be related to an existing comic',
  })
  comicId: string;

  @ApiProperty({ required: true, type: String })
  storyName: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The title should not be empty',
  })
  @Length(5, 100)
  title: string;

  @ApiProperty({ required: true, type: String, isArray: true })
  @IsNotEmpty({
    message: 'The chapter should have an image',
  })
  images: string[];

  @ApiProperty({ required: true, type: Number })
  chapter: number;

  @ApiProperty({ required: true, type: Number })
  views: number;
}
