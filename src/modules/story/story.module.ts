import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { PrismaService } from 'src/database/prisma.service';
import { StoryMapper } from 'src/mappers/story.mapper';

@Module({
  controllers: [StoryController],
  providers: [StoryService, PrismaService, StoryMapper],
})
export class StoryModule {}
