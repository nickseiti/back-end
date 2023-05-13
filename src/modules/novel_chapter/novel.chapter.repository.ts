import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NovelChapter } from './novel.chapter.model';
import { NovelChapterDTO } from './novel.chapter.dto';

@Injectable()
export class NovelChapterRepository {
  constructor(
    @InjectModel(NovelChapter.name)
    private readonly novelChapterModel: Model<NovelChapter>,
  ) {}

  async create(novelChapterDTO: NovelChapterDTO): Promise<NovelChapter> {
    const createdNovelChapter = new this.novelChapterModel(novelChapterDTO);
    return await createdNovelChapter.save();
  }

  async findAll(): Promise<NovelChapter[]> {
    return await this.novelChapterModel.find().exec();
  }

  async findById(id: string): Promise<NovelChapter> {
    return await this.novelChapterModel.findById(id).exec();
  }

  async update(
    id: string,
    novelChapterDTO: NovelChapterDTO,
  ): Promise<NovelChapter> {
    return await this.novelChapterModel
      .findByIdAndUpdate(id, novelChapterDTO, { new: true })
      .exec();
  }

  async delete(id: string): Promise<NovelChapter> {
    return await this.novelChapterModel.findByIdAndDelete(id).exec();
  }
}
