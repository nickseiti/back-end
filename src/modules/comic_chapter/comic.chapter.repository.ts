import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComicChapter, ComicChapterDocument } from './Comic.chapter.model';
import { CreateComicChapterDTO, UpdateComicChapterDTO } from './dto/index';
import { DefaultRepository } from 'src/shared/database/default.repository';

@Injectable()
export class ComicChapterRepository extends DefaultRepository<
  ComicChapterDocument,
  CreateComicChapterDTO,
  UpdateComicChapterDTO
> {
  constructor(
    @InjectModel(ComicChapter.name)
    protected readonly comicChapterModel: Model<ComicChapterDocument>,
  ) {
    super(comicChapterModel);
  }
}
