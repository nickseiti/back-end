import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from './novel.model';
import { DefaultRepository } from 'src/shared/database/default.repository';
import { CreateNovelDTO, UpdateNovelDTO } from './dto/index';

@Injectable()
export class NovelRepository extends DefaultRepository<
  NovelDocument,
  CreateNovelDTO,
  UpdateNovelDTO
> {
  constructor(
    @InjectModel(Novel.name)
    protected readonly novelModel: Model<NovelDocument>,
  ) {
    super(novelModel);
  }
}
