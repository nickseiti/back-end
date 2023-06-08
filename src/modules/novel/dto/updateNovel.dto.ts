import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
import { UpdateNovelChapterDTO } from 'src/modules/novel_chapter/dto';

export class UpdateNovelDTO {
  @ApiProperty({ required: true, type: String })
  id: string;

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

  @ApiProperty({
    required: false,
    type: [UpdateNovelChapterDTO],
    isArray: true,
  })
  chaptersId?: UpdateNovelChapterDTO[];

  @ApiProperty({ required: true, type: Number })
  views: number;

  @ApiProperty({ required: true, type: Boolean, default: false })
  complete: boolean;
}
