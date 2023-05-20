import { NovelDTO } from 'src/modules/novel/novel.dto';
import { Novel } from 'src/modules/novel/novel.model';
import { NovelChapterMapper } from './novel.chapter.mapper';

export class NovelMapper {
  static dtoToEntity(dto: NovelDTO): Novel {
    if (dto) {
      return {
        _id: dto.id,
        complete: dto.complete,
        storyId: dto.storyId,
        views: dto.views,
        chapters: NovelChapterMapper.dtoListToEntity(dto.chapters),
        storyName: dto.storyName,
        createdAt: dto.createdAt,
        updatedAt: dto.updatedAt,
      };
    }
    return null;
  }

  static dtoListToEntity(dto: NovelDTO[]): Novel[] {
    const novels: Novel[] = [];
    if (dto) {
      dto.forEach((novel) => {
        novels.push(NovelMapper.dtoToEntity(novel));
      });
    }

    return novels;
  }

  static entityToDTO(entity: Novel): NovelDTO {
    if (entity) {
      return {
        id: entity._id,
        complete: entity.complete,
        storyId: entity.storyId,
        views: entity.views,
        chapters: NovelChapterMapper.entityListToDTO(entity.chapters),
        storyName: entity.storyName,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
      };
    }
    return null;
  }

  static entityListToDTO(entity: Novel[]): NovelDTO[] {
    const dtos: NovelDTO[] = [];
    if (entity) {
      entity.forEach((story) => {
        dtos.push(NovelMapper.entityToDTO(story));
      });
    }

    return dtos;
  }
}
