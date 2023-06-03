import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreateNovelChapterDTO {
  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The chapter should be related to an existing novel',
  })
  novelId: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The story name should not be empty',
  })
  @Length(5, 100)
  storyName: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The title should not be empty',
  })
  @Length(5, 100)
  title: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty({
    message: 'The context should not be empty',
  })
  @MinLength(5)
  context: string;

  @ApiProperty({ required: true, type: Number, default: 0 })
  chapter: number;

  @ApiProperty({ required: true, type: Number })
  views: number;
}
