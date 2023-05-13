import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comic } from './Comic.model';
import { ComicDTO } from './Comic.dto';

@Injectable()
export class ComicRepository {
  constructor(
    @InjectModel(Comic.name)
    private readonly comicModel: Model<Comic>,
  ) {}

  async create(comicDTO: ComicDTO): Promise<Comic> {
    const createdComic = new this.comicModel(comicDTO);
    return await createdComic.save();
  }

  async findAll(): Promise<Comic[]> {
    return await this.comicModel.find().exec();
  }

  async findById(id: string): Promise<Comic> {
    return await this.comicModel.findById(id).exec();
  }

  async update(id: string, comicDTO: ComicDTO): Promise<Comic> {
    return await this.comicModel
      .findByIdAndUpdate(id, comicDTO, {
        new: true,
      })
      .exec();
  }

  async delete(id: string): Promise<Comic> {
    return await this.comicModel.findByIdAndDelete(id).exec();
  }
}
