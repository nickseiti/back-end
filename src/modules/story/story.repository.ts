import { Injectable } from '@nestjs/common';
import { Story, StoryDocument } from './story.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DefaultRepository } from 'src/shared/database/default.repository';

@Injectable()
export class StoryRepository extends DefaultRepository<StoryDocument> {
  constructor(
    @InjectModel(Story.name)
    protected readonly storyModel: Model<StoryDocument>,
  ) {
    super(storyModel);
  }

  findAll(): Promise<StoryDocument[]> {
    return this.storyModel
      .find()
      .populate({ path: 'novel', populate: 'chapters' })
      .populate({ path: 'comic', populate: 'chapters' })
      .exec();
  }

  findById(id: string): Promise<StoryDocument> {
    return this.storyModel
      .findById(id)
      .populate({ path: 'novel', populate: 'chapters' })
      .populate({ path: 'comic', populate: 'chapters' })
      .exec();
  }

  update(id: string, story: Story): Promise<StoryDocument> {
    return this.storyModel
      .findByIdAndUpdate(id, story, { new: true })
      .populate({ path: 'novel', populate: 'chapters' })
      .populate({ path: 'comic', populate: 'chapters' })
      .exec();
  }

  delete(id: string): Promise<StoryDocument> {
    return this.storyModel
      .findByIdAndDelete(id)
      .populate({ path: 'novel', populate: 'chapters' })
      .populate({ path: 'comic', populate: 'chapters' })
      .exec();
  }
}
