import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComicChapter, ComicChapterDocument } from './Comic.chapter.model';

@Injectable()
export class ComicChapterRepository {
  constructor(
    @InjectModel(ComicChapter.name)
    private readonly comicChapterModel: Model<ComicChapterDocument>,
  ) {}

  async create(comicChapter: ComicChapter): Promise<ComicChapter> {
    const createdComicChapter = new this.comicChapterModel(comicChapter);
    return await createdComicChapter.save();
  }

  async findAll(): Promise<ComicChapter[]> {
    return await this.comicChapterModel.find().exec();
  }

  async findById(id: string): Promise<ComicChapter> {
    return await this.comicChapterModel.findById(id).exec();
  }

  async update(id: string, comicChapter: ComicChapter): Promise<ComicChapter> {
    return await this.comicChapterModel
      .findByIdAndUpdate(id, comicChapter, { new: true })
      .exec();
  }

  async delete(id: string): Promise<ComicChapter> {
    return await this.comicChapterModel.findByIdAndDelete(id).exec();
  }
}
