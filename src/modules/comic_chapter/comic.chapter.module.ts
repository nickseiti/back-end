import { Module } from '@nestjs/common';
import { ComicChapterService } from './comic.chapter.service';

@Module({
  controllers: [],
  providers: [ComicChapterService],
})
export class ComicChapterModule {}
