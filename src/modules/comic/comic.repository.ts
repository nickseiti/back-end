import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comic, ComicDocument } from './Comic.model';
import { DefaultRepository } from 'src/shared/database/default.repository';

@Injectable()
export class ComicRepository extends DefaultRepository<ComicDocument> {
  constructor(
    @InjectModel(Comic.name)
    protected readonly comicModel: Model<ComicDocument>,
  ) {
    super(comicModel);
  }
}
