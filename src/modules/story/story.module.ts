import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Story, StorySchema } from './story.model';
import { StoryRepository } from './story.repository';
import { NovelModule } from '../novel/novel.module';
import { ComicModule } from '../comic/comic.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Story.name, schema: StorySchema }]),
    NovelModule,
    ComicModule,
  ],
  controllers: [StoryController],
  providers: [StoryService, StoryRepository],
})
export class StoryModule {}
