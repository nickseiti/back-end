import { ApiProperty } from '@nestjs/swagger';
import { ComicChapterDTO } from '../comic_chapter/comic.chapter.dto';
import { IsNotEmpty, Length } from 'class-validator';
export class ComicDTO {
  @ApiProperty({ required: false, type: String })
  id?: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The comic should be related to an existing story',
  })
  storyId: string;

  @IsNotEmpty({
    message: 'The story name should not be empty',
  })
  @Length(5, 100)
  @ApiProperty({ required: true, type: String })
  storyName: string;

  @ApiProperty({ required: false, type: [ComicChapterDTO] })
  chapters?: ComicChapterDTO[];

  @ApiProperty({ required: true, type: Number })
  views: number;

  @ApiProperty({ required: true, type: Boolean })
  complete: boolean;

  @ApiProperty({ required: false, type: Date })
  createdAt?: Date;

  @ApiProperty({ required: false, type: Date })
  updatedAt?: Date;
}
