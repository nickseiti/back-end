import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { UpdateComicDTO } from 'src/modules/comic/dto';
import { UpdateNovelDTO } from 'src/modules/novel/dto';

export class UpdateStoryDTO {
  @ApiProperty({ required: true, type: String })
  id: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The story name should not be empty',
  })
  @Length(5, 100)
  name: string;

  @ApiProperty({ required: false, type: UpdateNovelDTO })
  novel?: UpdateNovelDTO;

  @ApiProperty({ required: false, type: UpdateComicDTO })
  comic?: UpdateComicDTO;
}
