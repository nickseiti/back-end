import { Injectable } from '@nestjs/common';
import { Story, StoryDocument } from './story.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DefaultRepository } from 'src/shared/database/default.repository';
import { CreateStoryDTO, UpdateStoryDTO } from './dto';

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
