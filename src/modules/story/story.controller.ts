import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryDTO } from './story.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('story')
@ApiTags('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async create(@Body() data: StoryDTO) {
    return this.storyService.create(data);
  }

  @Get()
  async findAll() {
    return this.storyService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.storyService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: StoryDTO) {
    return this.storyService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.storyService.delete(id);
  }
}
