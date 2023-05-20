import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comic, ComicDocument } from './Comic.model';

@Injectable()
export class ComicRepository {
  constructor(
    @InjectModel(Comic.name)
    private readonly comicModel: Model<ComicDocument>,
  ) {}

  async create(comic: Comic): Promise<Comic> {
    const createdComic = new this.comicModel(comic);
    return await createdComic.save();
  }

  async findAll(): Promise<Comic[]> {
    return await this.comicModel.find().exec();
  }

  async findById(id: string): Promise<Comic> {
    return await this.comicModel.findById(id).exec();
  }

  async update(id: string, comic: Comic): Promise<Comic> {
    return await this.comicModel
      .findByIdAndUpdate(id, comic, {
        new: true,
      })
      .exec();
  }

  async delete(id: string): Promise<Comic> {
    return await this.comicModel.findByIdAndDelete(id).exec();
  }
}
