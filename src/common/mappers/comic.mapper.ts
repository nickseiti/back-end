import { Comic } from 'src/modules/comic/comic.model';
import { ComicDTO } from 'src/modules/comic/comic.dto';

export class ComicMapper {
  static dtoToEntity(dto: ComicDTO): Comic {
    return {
      _id: dto.id,
      complete: dto.complete,
      storyId: dto.storyId,
      views: dto.views,
      storyName: dto.storyName,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }

  static dtoListToEntity(dtos: ComicDTO[]): Comic[] {
    const entitys: Comic[] = [];
    dtos.forEach((dto) => {
      entitys.push(ComicMapper.dtoToEntity(dto));
    });
    return entitys;
  }

  static entityToDTO(entity: Comic): ComicDTO {
    return {
      id: entity._id,
      complete: entity.complete,
      storyId: entity.storyId,
      views: entity.views,
      storyName: entity.storyName,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static entityListToDTO(entity: Comic[]): ComicDTO[] {
    const dtos: ComicDTO[] = [];
    entity.forEach((story) => {
      dtos.push(ComicMapper.entityToDTO(story));
    });
    return dtos;
  }
}
