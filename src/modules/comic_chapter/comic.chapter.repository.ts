import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComicChapter } from './Comic.chapter.model';
import { ComicChapterDTO } from './Comic.chapter.dto';

@Injectable()
export class ComicChapterRepository {
  constructor(
    @InjectModel(ComicChapter.name)
    private readonly comicChapterModel: Model<ComicChapter>,
  ) {}

  async create(comicChapterDTO: ComicChapterDTO): Promise<ComicChapter> {
    const createdComicChapter = new this.comicChapterModel(comicChapterDTO);
    return await createdComicChapter.save();
  }

  async findAll(): Promise<ComicChapter[]> {
    return await this.comicChapterModel.find().exec();
  }

  async findById(id: string): Promise<ComicChapter> {
    return await this.comicChapterModel.findById(id).exec();
  }

  async update(
    id: string,
    comicChapterDTO: ComicChapterDTO,
  ): Promise<ComicChapter> {
    return await this.comicChapterModel
      .findByIdAndUpdate(id, comicChapterDTO, { new: true })
      .exec();
  }

  async delete(id: string): Promise<ComicChapter> {
    return await this.comicChapterModel.findByIdAndDelete(id).exec();
  }
}
