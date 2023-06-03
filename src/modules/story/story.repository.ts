import { Injectable } from '@nestjs/common';
import { Story, StoryDocument } from './story.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoryDTO, UpdateStoryDTO } from './dto/index';
import { DefaultRepository } from 'src/shared/database/default.repository';

@Injectable()
export class StoryRepository extends DefaultRepository<
  StoryDocument,
  CreateStoryDTO,
  UpdateStoryDTO
> {
  constructor(
    @InjectModel(Story.name)
    protected readonly storyModel: Model<StoryDocument>,
  ) {
    super(storyModel);
  }
}
