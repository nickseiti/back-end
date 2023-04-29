import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { NovelChapterDTO } from '../novel_chapter/novel.chapter.dto';

export class NovelDTO {
  @ApiProperty({ required: false, type: String })
  id?: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The novel should be related to an existing story',
  })
  storyId: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The story name should not be empty',
  })
  @Length(5, 100)
  storyName: string;

  @ApiProperty({ required: false, type: [NovelChapterDTO], isArray: true })
  chapters?: NovelChapterDTO[];

  @ApiProperty({ required: true, type: Number })
  views: number;

  @ApiProperty({ required: true, type: Boolean, default: false })
  complete: boolean;

  @ApiProperty({ required: false, type: Date })
  createdAt?: Date;

  @ApiProperty({ required: false, type: Date })
  updatedAt?: Date;
}
