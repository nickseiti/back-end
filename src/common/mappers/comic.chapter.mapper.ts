import { ComicChapter } from '@prisma/client';
import { ComicChapterDTO } from 'src/modules/comic_chapter/comic.chapter.dto';

export class ComicChapterMapper {
  static dtoToEntity(dto: ComicChapterDTO): ComicChapter {
    return {
      id: dto.id,
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
    let ComicChapters: ComicChapter[];
    dto.forEach((chapter) => {
      ComicChapters.push(ComicChapterMapper.dtoToEntity(chapter));
    });
    return ComicChapters;
  }
}
