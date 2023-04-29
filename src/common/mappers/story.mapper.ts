import { Story } from '@prisma/client';
import { StoryDTO } from '../../modules/story/story.dto';

export class StoryMapper {
  static dtoToEntity(dto: StoryDTO): Story {
    return {
      id: dto.id,
      name: dto.name,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }
}
