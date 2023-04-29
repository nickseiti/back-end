import { Module } from '@nestjs/common';
import { ComicService } from './comic.service';
import { PrismaService } from 'src/shared/database/prisma.service';
import { ComicController } from './comic.controller';

@Module({
  controllers: [ComicController],
  providers: [ComicService, PrismaService],
})
export class ComicModule {}
