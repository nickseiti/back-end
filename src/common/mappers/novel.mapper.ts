import { NovelDTO } from 'src/modules/novel/novel.dto';
import { Novel } from '@prisma/client';

export class NovelMapper {
  static dtoToEntity(dto: NovelDTO): Novel {
    return {
      id: dto.id,
      complete: dto.complete,
      storyId: dto.storyId,
      views: dto.views,
      storyName: dto.storyName,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }
}
