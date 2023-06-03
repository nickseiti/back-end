import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateNovelDTO {
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

  @ApiProperty({ required: true, type: Number, default: 0 })
  views: number;

  @ApiProperty({ required: true, type: Boolean, default: false })
  complete: boolean;
}
