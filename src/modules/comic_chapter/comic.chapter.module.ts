import { Module } from '@nestjs/common';
import { ComicChapterService } from './comic.chapter.service';
import { PrismaService } from 'src/database/prisma.service';
import { ComicChapterController } from './comic.chapter.controller';

@Module({
  controllers: [ComicChapterController],
  providers: [ComicChapterService, PrismaService],
})
export class ComicChapterModule {}
