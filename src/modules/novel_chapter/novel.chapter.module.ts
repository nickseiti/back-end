import { Module } from '@nestjs/common';
import { NovelChapterService } from './novel.chapter.service';
import { PrismaService } from 'src/shared/database/prisma.service';
import { NovelChapterController } from './novel.chapter.controller';

@Module({
  controllers: [NovelChapterController],
  providers: [NovelChapterService, PrismaService],
})
export class NovelChapterModule {}
