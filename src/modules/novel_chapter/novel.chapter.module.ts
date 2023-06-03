import { Module } from '@nestjs/common';
import { NovelChapterService } from './novel.chapter.service';
import { NovelChapterController } from './novel.chapter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NovelChapter, NovelChapterSchema } from './novel.chapter.model';
import { NovelChapterRepository } from './novel.chapter.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NovelChapter.name, schema: NovelChapterSchema },
    ]),
  ],
  controllers: [NovelChapterController],
  providers: [NovelChapterService, NovelChapterRepository],
  exports: [NovelChapterService],
})
export class NovelChapterModule {}
