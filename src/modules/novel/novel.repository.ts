import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel } from './novel.model';
import { NovelDTO } from './novel.dto';

@Injectable()
export class NovelRepository {
  constructor(
    @InjectModel(Novel.name)
    private readonly novelModel: Model<Novel>,
  ) {}

  async create(novelDTO: NovelDTO): Promise<Novel> {
    const createdNovel = new this.novelModel(novelDTO);
    return await createdNovel.save();
  }

  async findAll(): Promise<Novel[]> {
    return await this.novelModel.find().exec();
  }

  async findById(id: string): Promise<Novel> {
    return await this.novelModel.findById(id).exec();
  }

  async update(id: string, novelDTO: NovelDTO): Promise<Novel> {
    return await this.novelModel
      .findByIdAndUpdate(id, novelDTO, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Novel> {
    return await this.novelModel.findByIdAndDelete(id).exec();
  }
}
