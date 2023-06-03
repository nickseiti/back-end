import { NovelChapter } from 'src/modules/novel_chapter/novel.chapter.model';
import {
  CreateNovelChapterDTO,
  NovelChapterDTO,
  UpdateNovelChapterDTO,
} from 'src/modules/novel_chapter/dto/index';

export class NovelChapterMapper {
  static dtoToEntity(dto: NovelChapterDTO): NovelChapter {
    if (dto) {
      return {
        _id: dto.id,
        chapter: dto.chapter,
        context: dto.context,
        novelId: dto.novelId,
        title: dto.title,
        views: dto.views,
        storyName: dto.storyName,
        createdAt: dto.createdAt,
        updatedAt: dto.updatedAt,
      };
    }
    return null;
  }

  static dtoListToEntity(dto: NovelChapterDTO[]): NovelChapter[] {
    const novelChapters: NovelChapter[] = [];
    if (dto) {
      dto.forEach((chapter) => {
        novelChapters.push(NovelChapterMapper.dtoToEntity(chapter));
      });
    }

    return novelChapters;
  }

  static entityToDTO(entity: NovelChapter): NovelChapterDTO {
    if (entity) {
      return {
        id: entity._id,
        chapter: entity.chapter,
        context: entity.context,
        novelId: entity.novelId,
        title: entity.title,
        views: entity.views,
        storyName: entity.storyName,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
      };
    }
    return null;
  }

  static entityListToDTO(entity: NovelChapter[]): NovelChapterDTO[] {
    const dtos: NovelChapterDTO[] = [];
    if (entity) {
      entity.forEach((story) => {
        dtos.push(NovelChapterMapper.entityToDTO(story));
      });
    }
    return dtos;
  }

  static createDtoToEntity(dto: CreateNovelChapterDTO): NovelChapter {
    if (dto) {
      return {
        chapter: dto.chapter,
        context: dto.context,
        novelId: dto.novelId,
        title: dto.title,
        views: dto.views,
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static createDtoListToEntity(dto: CreateNovelChapterDTO[]): NovelChapter[] {
    const novelChapters: NovelChapter[] = [];
    if (dto) {
      dto.forEach((chapter) => {
        novelChapters.push(NovelChapterMapper.createDtoToEntity(chapter));
      });
    }

    return novelChapters;
  }

  static updateDtoToEntity(dto: UpdateNovelChapterDTO): NovelChapter {
    if (dto) {
      return {
        chapter: dto.chapter,
        context: dto.context,
        novelId: dto.novelId,
        title: dto.title,
        views: dto.views,
        storyName: dto.storyName,
      };
    }
    return null;
  }

  static updateDtoListToEntity(dto: UpdateNovelChapterDTO[]): NovelChapter[] {
    const novelChapters: NovelChapter[] = [];
    if (dto) {
      dto.forEach((chapter) => {
        novelChapters.push(NovelChapterMapper.updateDtoToEntity(chapter));
      });
    }

    return novelChapters;
  }

  static dtoIdToString(dto: NovelChapterDTO): string {
    if (dto) {
      return dto.id;
    }
    return null;
  }

  static dtoIdListToString(dto: NovelChapterDTO[]): string[] {
    const id: string[] = [];
    if (dto) {
      dto.forEach((chapter) => {
        id.push(NovelChapterMapper.dtoIdToString(chapter));
      });
    }

    return id;
  }
}
