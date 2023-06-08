import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NovelChapter, NovelChapterDocument } from './novel.chapter.model';
import { DefaultRepository } from 'src/shared/database/default.repository';

@Injectable()
export class NovelChapterRepository extends DefaultRepository<NovelChapterDocument> {
  constructor(
    @InjectModel(NovelChapter.name)
    protected readonly novelChapterModel: Model<NovelChapterDocument>,
  ) {
    super(novelChapterModel);
  }
}
