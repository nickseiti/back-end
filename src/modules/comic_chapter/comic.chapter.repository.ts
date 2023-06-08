import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComicChapter, ComicChapterDocument } from './Comic.chapter.model';
import { DefaultRepository } from 'src/shared/database/default.repository';

@Injectable()
export class ComicChapterRepository extends DefaultRepository<ComicChapterDocument> {
  constructor(
    @InjectModel(ComicChapter.name)
    protected readonly comicChapterModel: Model<ComicChapterDocument>,
  ) {
    super(comicChapterModel);
  }
}
