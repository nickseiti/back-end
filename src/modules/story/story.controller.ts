import { Controller, Body, Post } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryDTO } from './story.dto';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async create(@Body() data: StoryDTO) {
    return this.storyService.create(data);
  }
}
