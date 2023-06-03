import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';
import { NovelController } from './novel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Novel, NovelSchema } from './novel.model';
import { NovelRepository } from './novel.repository';
import { NovelChapterModule } from '../novel_chapter/novel.chapter.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Novel.name, schema: NovelSchema }]),
    NovelChapterModule,
  ],
  controllers: [NovelController],
  providers: [NovelService, NovelRepository],
  exports: [NovelService],
})
export class NovelModule {}
