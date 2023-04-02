import { ComicChapterDTO } from '../comic_chapter/comic.chapter.dto';

export type ComicDTO = {
  id?: string;
  storyId: string;
  storyName: string;
  chapters: ComicChapterDTO[];
  views: number;
  complete: boolean;
};
