import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comic, ComicDocument } from './Comic.model';
import { CreateComicDTO, UpdateComicDTO } from './dto/index';
import { DefaultRepository } from 'src/shared/database/default.repository';

@Injectable()
export class ComicRepository extends DefaultRepository<
  ComicDocument,
  CreateComicDTO,
  UpdateComicDTO
> {
  constructor(
    @InjectModel(Comic.name)
    protected readonly comicModel: Model<ComicDocument>,
  ) {
    super(comicModel);
  }
}
