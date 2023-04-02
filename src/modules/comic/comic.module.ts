import { Module } from '@nestjs/common';
import { ComicService } from './comic.service';

@Module({
  controllers: [],
  providers: [ComicService],
})
export class ComicModule {}
