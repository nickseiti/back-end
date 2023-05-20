import { Module } from '@nestjs/common';
import { ComicChapterModule } from './modules/comic_chapter/comic.chapter.module';
import { NovelChapterModule } from './modules/novel_chapter/novel.chapter.module';
import { NovelModule } from './modules/novel/novel.module';
import { ComicModule } from './modules/comic/comic.module';
import { StoryModule } from './modules/story/story.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION, MONGO_DATABASE } from './shared/database/properties';

@Module({
  imports: [
    StoryModule,
    ComicModule,
    NovelModule,
    ComicChapterModule,
    NovelChapterModule,
    MongooseModule.forRoot(MONGO_CONNECTION, { dbName: MONGO_DATABASE }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
