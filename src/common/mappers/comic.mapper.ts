import { Comic } from 'src/modules/comic/comic.model';
import {
  ComicDTO,
  CreateComicDTO,
  UpdateComicDTO,
} from 'src/modules/comic/dto/index';
import { ComicChapterMapper } from './comic.chapter.mapper';
import { isEmpty } from 'class-validator';

export class ComicMapper {
  static dtoToEntity(dto: ComicDTO): Comic {
    if (!isEmpty(dto)) {
      return {
        _id: dto.id,
        complete: dto.complete,
        storyId: dto.storyId,
        chapters: ComicChapterMapper.dtoListToEntity(dto.chapters),
        views: dto.views,
        storyName: dto.storyName,
        createdAt: dto.createdAt,
        updatedAt: dto.updatedAt,
      };
    }
    return null;
  }

  static dtoListToEntity(dtos: ComicDTO[]): Comic[] {
    const entitys: Comic[] = [];
    if (!isEmpty(dtos)) {
      dtos.forEach((dto) => {
        entitys.push(ComicMapper.dtoToEntity(dto));
      });
    }

    return entitys;
  }

  static entityToDTO(entity: Comic): ComicDTO {
    if (!isEmpty(entity)) {
      return {
        id: entity._id,
        complete: entity.complete,
        storyId: entity.storyId,
        views: entity.views,
        chapters: ComicChapterMapper.entityListToDTO(entity.chapters),
        storyName: entity.storyName,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
      };
    }
    return null;
  }

  static entityListToDTO(entity: Comic[]): ComicDTO[] {
    const dtos: ComicDTO[] = [];
    if (!isEmpty(entity)) {
      entity.forEach((story) => {
        dtos.push(ComicMapper.entityToDTO(story));
      });
    }

    return dtos;
  }

  static createDtoToEntity(dto: CreateComicDTO): Comic {
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

  static createDtoListToEntity(dtos: CreateComicDTO[]): Comic[] {
    const entitys: Comic[] = [];
    if (!isEmpty(dtos)) {
      dtos.forEach((dto) => {
        entitys.push(ComicMapper.createDtoToEntity(dto));
      });
    }

    return entitys;
  }

  static updateDtoToEntity(dto: UpdateComicDTO): Comic {
    if (!isEmpty(dto)) {
      return {
        _id: dto.id,
        complete: dto.complete,
        storyId: dto.storyId,
        chapters: ComicChapterMapper.dtoListToEntity(dto.chapters),
        views: dto.views,
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static dtoToUpdateDto(dto: ComicDTO): UpdateComicDTO {
    if (!isEmpty(dto)) {
      return {
        id: dto.id,
        complete: dto.complete,
        storyId: dto.storyId,
        views: dto.views,
        chapters: ComicChapterMapper.dtoListToUpdate(dto.chapters),
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static updateDtoToDto(dto: UpdateComicDTO): ComicDTO {
    if (!isEmpty(dto)) {
      return {
        id: dto.id,
        complete: dto.complete,
        storyId: dto.storyId,
        views: dto.views,
        chapters: ComicChapterMapper.updateDtoListToDto(dto.chapters),
        storyName: dto.storyName,
      };
    }
    return null;
  }
}
