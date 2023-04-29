import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';
import { PrismaService } from 'src/shared/database/prisma.service';
import { NovelController } from './novel.controller';

@Module({
  controllers: [NovelController],
  providers: [NovelService, PrismaService],
})
export class NovelModule {}
