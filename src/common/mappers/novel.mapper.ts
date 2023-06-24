import {
  CreateNovelDTO,
  NovelDTO,
  UpdateNovelDTO,
} from 'src/modules/novel/dto/index';
import { Novel } from 'src/modules/novel/novel.model';
import { NovelChapterMapper } from './novel.chapter.mapper';
import { isEmpty } from 'class-validator';

export class NovelMapper {
  static dtoToEntity(dto: NovelDTO): Novel {
    if (!isEmpty(dto)) {
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
    if (!isEmpty(dto)) {
      dto.forEach((novel) => {
        novels.push(NovelMapper.dtoToEntity(novel));
      });
    }

    return novels;
  }

  static entityToDTO(entity: Novel): NovelDTO {
    if (!isEmpty(entity)) {
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
    if (!isEmpty(entity)) {
      entity.forEach((story) => {
        dtos.push(NovelMapper.entityToDTO(story));
      });
    }

    return dtos;
  }

  static createDtoToEntity(dto: CreateNovelDTO): Novel {
    if (!isEmpty(dto)) {
      return {
        complete: dto.complete,
        storyId: dto.storyId,
        views: dto.views,
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static createDtoListToEntity(dto: CreateNovelDTO[]): Novel[] {
    const novels: Novel[] = [];
    if (!isEmpty(dto)) {
      dto.forEach((novel) => {
        novels.push(NovelMapper.createDtoToEntity(novel));
      });
    }

    return novels;
  }

  static updateDtoToEntity(dto: UpdateNovelDTO): Novel {
    if (!isEmpty(dto)) {
      return {
        _id: dto.id,
        complete: dto.complete,
        storyId: dto.storyId,
        views: dto.views,
        chapters: NovelChapterMapper.updateDtoListToEntity(dto.chaptersId),
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static dtoToUpdateDto(dto: NovelDTO): UpdateNovelDTO {
    if (!isEmpty(dto)) {
      return {
        id: dto.id,
        complete: dto.complete,
        storyId: dto.storyId,
        views: dto.views,
        chaptersId: NovelChapterMapper.dtoListToUpdate(dto.chapters),
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static updateDtoToDto(dto: UpdateNovelDTO): NovelDTO {
    if (!isEmpty(dto)) {
      return {
        id: dto.id,
        complete: dto.complete,
        storyId: dto.storyId,
        views: dto.views,
        chapters: NovelChapterMapper.updateDtoListToDto(dto.chaptersId),
        storyName: dto.storyName,
      };
    }
    return null;
  }
}
