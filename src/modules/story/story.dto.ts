import { ComicDTO } from '../comic/comic.dto';
import { NovelDTO } from '../novel/novel.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class StoryDTO {
  @ApiProperty({ required: false, type: String })
  id?: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The story name should not be empty',
  })
  @Length(5, 100)
  name: string;

  @ApiProperty({ required: false, type: Date })
  createdAt?: Date;

  @ApiProperty({ required: false, type: Date })
  updatedAt?: Date;

  @ApiProperty({ required: false, type: [NovelDTO] })
  novel?: NovelDTO;

  @ApiProperty({ required: false, type: [ComicDTO] })
  comic?: ComicDTO;
}
