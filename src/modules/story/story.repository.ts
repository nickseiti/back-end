import { Injectable } from '@nestjs/common';
import { Story, StoryDocument } from './story.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StoryDTO } from './story.dto';

@Injectable()
export class StoryRepository {
  constructor(
    @InjectModel(Story.name) private readonly storyModel: Model<StoryDocument>,
  ) {}

  async create(storyDTO: StoryDTO): Promise<Story> {
    const createdStory = new this.storyModel(storyDTO);
    return await createdStory.save();
  }

  async findAll(): Promise<Story[]> {
    return await this.storyModel
      .find()
      .populate({ path: 'novel', populate: 'chapters' })
      .populate({ path: 'comic', populate: 'chapters' })
      .exec();
  }

  async findById(id: string): Promise<Story> {
    return await this.storyModel
      .findById(id)
      .populate({ path: 'novel', populate: 'chapters' })
      .populate({ path: 'comic', populate: 'chapters' })
      .exec();
  }

  async update(id: string, story: Story): Promise<Story> {
    return await this.storyModel
      .findByIdAndUpdate(id, story, { new: true })
      .populate({ path: 'novel', populate: 'chapters' })
      .populate({ path: 'comic', populate: 'chapters' })
      .exec();
  }

  async delete(id: string): Promise<Story> {
    return await this.storyModel
      .findByIdAndDelete(id)
      .populate({ path: 'novel', populate: 'chapters' })
      .populate({ path: 'comic', populate: 'chapters' })
      .exec();
  }
}
