import { Module } from '@nestjs/common';
import { ComicChapterService } from './comic.chapter.service';
import { ComicChapterController } from './comic.chapter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ComicChapter, ComicChapterSchema } from './comic.chapter.model';
import { ComicChapterRepository } from './comic.chapter.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ComicChapter.name, schema: ComicChapterSchema },
    ]),
  ],
  controllers: [ComicChapterController],
  providers: [ComicChapterService, ComicChapterRepository],
})
export class ComicChapterModule {}
