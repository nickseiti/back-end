import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { ComicDTO } from 'src/modules/comic/dto/comic.dto';
import { NovelDTO } from 'src/modules/novel/dto/novel.dto';

export class UpdateStoryDTO {
  @ApiProperty({ required: true, type: String })
  id: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The story name should not be empty',
  })
  @Length(5, 100)
  name: string;

  @ApiProperty({ required: false, type: NovelDTO })
  novel?: NovelDTO;

  @ApiProperty({ required: false, type: ComicDTO })
  comic?: ComicDTO;
}
