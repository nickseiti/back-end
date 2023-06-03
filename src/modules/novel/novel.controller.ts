import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NovelService } from './novel.service';
import { NovelDTO, CreateNovelDTO, UpdateNovelDTO } from './dto/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('novel')
@ApiTags('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Post()
  async create(@Body() data: CreateNovelDTO): Promise<NovelDTO> {
    return this.novelService.create(data);
  }

  @Get()
  async findAll(): Promise<NovelDTO[]> {
    return this.novelService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<NovelDTO> {
    return this.novelService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateNovelDTO,
  ): Promise<NovelDTO> {
    return this.novelService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<NovelDTO> {
    return this.novelService.delete(id);
  }
}
