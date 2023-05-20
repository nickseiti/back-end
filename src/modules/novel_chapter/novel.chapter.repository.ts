import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NovelChapter, NovelChapterDocument } from './novel.chapter.model';

@Injectable()
export class NovelChapterRepository {
  constructor(
    @InjectModel(NovelChapter.name)
    private readonly novelChapterModel: Model<NovelChapterDocument>,
  ) {}

  async create(novelChapter: NovelChapter): Promise<NovelChapter> {
    const createdNovelChapter = new this.novelChapterModel(novelChapter);
    return await createdNovelChapter.save();
  }

  async findAll(): Promise<NovelChapter[]> {
    return await this.novelChapterModel.find().exec();
  }

  async findById(id: string): Promise<NovelChapter> {
    return await this.novelChapterModel.findById(id).exec();
  }

  async update(id: string, novelChapter: NovelChapter): Promise<NovelChapter> {
    return await this.novelChapterModel
      .findByIdAndUpdate(id, novelChapter, { new: true })
      .exec();
  }

  async delete(id: string): Promise<NovelChapter> {
    return await this.novelChapterModel.findByIdAndDelete(id).exec();
  }
}
