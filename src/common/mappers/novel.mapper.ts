import { NovelDTO } from 'src/modules/novel/novel.dto';
import { Novel } from 'src/modules/novel/novel.model';

export class NovelMapper {
  static dtoToEntity(dto: NovelDTO): Novel {
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

  static dtoListToEntity(dto: NovelDTO[]): Novel[] {
    const novels: Novel[] = [];
    dto.forEach((novel) => {
      novels.push(NovelMapper.dtoToEntity(novel));
    });
    return novels;
  }

  static entityToDTO(entity: Novel): NovelDTO {
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

  static entityListToDTO(entity: Novel[]): NovelDTO[] {
    const dtos: NovelDTO[] = [];
    entity.forEach((story) => {
      dtos.push(NovelMapper.entityToDTO(story));
    });
    return dtos;
  }
}
