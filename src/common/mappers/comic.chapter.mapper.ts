import { ComicChapter } from 'src/modules/comic_chapter/comic.chapter.model';
import {
  ComicChapterDTO,
  CreateComicChapterDTO,
  UpdateComicChapterDTO,
} from 'src/modules/comic_chapter/dto/index';

export class ComicChapterMapper {
  static dtoToEntity(dto: ComicChapterDTO): ComicChapter {
    if (dto) {
      return {
        _id: dto.id,
        chapter: dto.chapter,
        images: dto.images,
        comicId: dto.comicId,
        title: dto.title,
        views: dto.views,
        storyName: dto.storyName,
        createdAt: dto.createdAt,
        updatedAt: dto.updatedAt,
      };
    }
    return null;
  }

  static dtoListToEntity(dto: ComicChapterDTO[]): ComicChapter[] {
    const ComicChapters: ComicChapter[] = [];
    if (dto) {
      dto.forEach((chapter) => {
        ComicChapters.push(ComicChapterMapper.dtoToEntity(chapter));
      });
    }

    return ComicChapters;
  }

  static entityToDTO(entity: ComicChapter): ComicChapterDTO {
    if (entity) {
      return {
        id: entity._id,
        chapter: entity.chapter,
        images: entity.images,
        comicId: entity.comicId,
        title: entity.title,
        views: entity.views,
        storyName: entity.storyName,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
      };
    }
    return null;
  }

  static entityListToDTO(entity: ComicChapter[]): ComicChapterDTO[] {
    const dtos: ComicChapterDTO[] = [];
    if (entity) {
      entity.forEach((story) => {
        dtos.push(ComicChapterMapper.entityToDTO(story));
      });
    }

    return dtos;
  }

  static createDtoToEntity(dto: CreateComicChapterDTO): ComicChapter {
    if (dto) {
      return {
        chapter: dto.chapter,
        images: dto.images,
        comicId: dto.comicId,
        title: dto.title,
        views: dto.views,
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static createDtoListToEntity(dto: CreateComicChapterDTO[]): ComicChapter[] {
    const ComicChapters: ComicChapter[] = [];
    if (dto) {
      dto.forEach((chapter) => {
        ComicChapters.push(ComicChapterMapper.createDtoToEntity(chapter));
      });
    }

    return ComicChapters;
  }

  static updateDtoToEntity(dto: UpdateComicChapterDTO): ComicChapter {
    if (dto) {
      return {
        _id: dto.id,
        chapter: dto.chapter,
        images: dto.images,
        comicId: dto.comicId,
        title: dto.title,
        views: dto.views,
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static updateDtoListToEntity(dto: UpdateComicChapterDTO[]): ComicChapter[] {
    const ComicChapters: ComicChapter[] = [];
    if (dto) {
      dto.forEach((chapter) => {
        ComicChapters.push(ComicChapterMapper.updateDtoToEntity(chapter));
      });
    }

    return ComicChapters;
  }

  static dtoIdToString(dto: ComicChapterDTO): string {
    if (dto) {
      return dto.id;
    }
    return null;
  }

  static dtoIdListToString(dto: ComicChapterDTO[]): string[] {
    const id: string[] = [];
    if (dto) {
      dto.forEach((chapter) => {
        id.push(ComicChapterMapper.dtoIdToString(chapter));
      });
    }

    return id;
  }
}
