import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';
import { NovelController } from './novel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Novel, NovelSchema } from './novel.model';
import { NovelRepository } from './novel.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Novel.name, schema: NovelSchema }]),
  ],
  controllers: [NovelController],
  providers: [NovelService, NovelRepository],
})
export class NovelModule {}
