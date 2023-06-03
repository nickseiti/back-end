import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NovelChapter, NovelChapterDocument } from './novel.chapter.model';
import { CreateNovelChapterDTO, UpdateNovelChapterDTO } from './dto/index';
import { DefaultRepository } from 'src/shared/database/default.repository';

@Injectable()
export class NovelChapterRepository extends DefaultRepository<
  NovelChapterDocument,
  CreateNovelChapterDTO,
  UpdateNovelChapterDTO
> {
  constructor(
    @InjectModel(NovelChapter.name)
    protected readonly novelChapterModel: Model<NovelChapterDocument>,
  ) {
    super(novelChapterModel);
  }
}
