import { NovelChapter } from '@prisma/client';
import { NovelChapterDTO } from 'src/modules/novel_chapter/novel.chapter.dto';

export class NovelChapterMapper {
  static dtoToEntity(dto: NovelChapterDTO): NovelChapter {
    return {
      id: dto.id,
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

  static dtoListToEntity(dto: NovelChapterDTO[]): NovelChapter[] {
    let novelChapters: NovelChapter[];
    dto.forEach((chapter) => {
      novelChapters.push(NovelChapterMapper.dtoToEntity(chapter));
    });
    return novelChapters;
  }
}
