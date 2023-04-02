export type ComicChapterDTO = {
  id?: string;
  comicId: string;
  storyName: string;
  title: string;
  images: string[];
  chapter: number;
  views: number;
};
