import { ComicDTO } from '../comic/comic.dto';
import { NovelDTO } from '../novel/novel.dto';

export type StoryDTO = {
  id?: string;
  name: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  novel?: NovelDTO;
  comic?: ComicDTO;
};
