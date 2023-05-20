import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from './novel.model';

@Injectable()
export class NovelRepository {
  constructor(
    @InjectModel(Novel.name)
    private readonly novelModel: Model<NovelDocument>,
  ) {}

  async create(novel: Novel): Promise<Novel> {
    const createdNovel = new this.novelModel(novel);
    return await createdNovel.save();
  }

  async findAll(): Promise<Novel[]> {
    return await this.novelModel.find().populate('chapters').exec();
  }

  async findById(id: string): Promise<Novel> {
    return await this.novelModel.findById(id).exec();
  }

  async update(id: string, novel: Novel): Promise<Novel> {
    return await this.novelModel
      .findByIdAndUpdate(id, novel, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Novel> {
    return await this.novelModel.findByIdAndDelete(id).exec();
  }
}
