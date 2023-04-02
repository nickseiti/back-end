import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';

@Module({
  controllers: [],
  providers: [NovelService],
})
export class NovelModule {}
