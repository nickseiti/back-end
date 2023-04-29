import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { PrismaService } from 'src/shared/database/prisma.service';

@Module({
  controllers: [StoryController],
  providers: [StoryService, PrismaService],
})
export class StoryModule {}
