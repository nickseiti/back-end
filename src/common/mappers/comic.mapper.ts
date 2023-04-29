import { Comic } from '@prisma/client';
import { ComicDTO } from 'src/modules/comic/comic.dto';

export class ComicMapper {
  static dtoToEntity(dto: ComicDTO): Comic {
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
