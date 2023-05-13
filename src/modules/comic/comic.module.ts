import { Module } from '@nestjs/common';
import { ComicService } from './comic.service';
import { ComicController } from './comic.controller';
import { Comic, ComicSchema } from './comic.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ComicRepository } from './comic.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comic.name, schema: ComicSchema }]),
  ],
  controllers: [ComicController],
  providers: [ComicService, ComicRepository],
})
export class ComicModule {}
