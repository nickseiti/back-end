import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, MinLength } from 'class-validator';
export class NovelChapterDTO {
  @ApiProperty({ required: false, type: String })
  id?: string;

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

  @ApiProperty({ required: true, type: Number })
  chapter: number;

  @ApiProperty({ required: true, type: Number })
  views: number;

  @ApiProperty({ required: false, type: Date })
  createdAt?: Date;

  @ApiProperty({ required: false, type: Date })
  updatedAt?: Date;
}
