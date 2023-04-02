import { NovelChapterDTO } from '../novel_chapter/novel.chapter.dto';

export type NovelDTO = {
  id?: string;
  storyId: string;
  storyName: string;
  chapters?: NovelChapterDTO[];
  views: number;
  complete: boolean;
};
