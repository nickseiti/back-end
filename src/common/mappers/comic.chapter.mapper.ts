import { ComicChapter } from 'src/modules/comic_chapter/comic.chapter.model';
import { ComicChapterDTO } from 'src/modules/comic_chapter/comic.chapter.dto';

export class ComicChapterMapper {
  static dtoToEntity(dto: ComicChapterDTO): ComicChapter {
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

  static dtoListToEntity(dto: ComicChapterDTO[]): ComicChapter[] {
    const ComicChapters: ComicChapter[] = [];
    dto.forEach((chapter) => {
      ComicChapters.push(ComicChapterMapper.dtoToEntity(chapter));
    });
    return ComicChapters;
  }

  static entityToDTO(entity: ComicChapter): ComicChapterDTO {
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

  static entityListToDTO(entity: ComicChapter[]): ComicChapterDTO[] {
    const dtos: ComicChapterDTO[] = [];
    entity.forEach((story) => {
      dtos.push(ComicChapterMapper.entityToDTO(story));
    });
    return dtos;
  }
}
