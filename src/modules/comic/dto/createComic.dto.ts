import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateComicDTO {
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

  @ApiProperty({ required: true, type: Number })
  views: number;

  @ApiProperty({ required: true, type: Boolean })
  complete: boolean;
}