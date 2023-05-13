import { Injectable } from '@nestjs/common';
import { Story } from './story.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StoryDTO } from './story.dto';

@Injectable()
export class StoryRepository {
  constructor(
    @InjectModel(Story.name) private readonly storyModel: Model<Story>,
  ) {}

  async create(storyDTO: StoryDTO): Promise<Story> {
    const createdStory = new this.storyModel(storyDTO);
    return await createdStory.save();
  }

  async findAll(): Promise<Story[]> {
    return await this.storyModel.find().exec();
  }

  async findById(id: string): Promise<Story> {
    return await this.storyModel.findById(id).exec();
  }

  async update(id: string, story: StoryDTO): Promise<Story> {
    return await this.storyModel
      .findByIdAndUpdate(id, story, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Story> {
    return await this.storyModel.findByIdAndDelete(id).exec();
  }
}
