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
import { ApiTags } from '@nestjs/swagger';
import { CreateStoryDTO, UpdateStoryDTO, StoryDTO } from './dto/index';

@Controller('story')
@ApiTags('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async create(@Body() data: CreateStoryDTO): Promise<StoryDTO> {
    return this.storyService.create(data);
  }

  @Get()
  async findAll(): Promise<StoryDTO[]> {
    return this.storyService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<StoryDTO> {
    return this.storyService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateStoryDTO,
  ): Promise<StoryDTO> {
    return this.storyService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<StoryDTO> {
    return this.storyService.delete(id);
  }
}
