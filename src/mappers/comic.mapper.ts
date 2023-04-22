import { ComicDTO } from 'src/modules/comic/comic.dto';
import { Comic } from '@prisma/client';

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
