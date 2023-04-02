import { Module } from '@nestjs/common';
import { NovelChapterService } from './novel.chapter.service';

@Module({
  controllers: [],
  providers: [NovelChapterService],
})
export class NovelChapterModule {}
