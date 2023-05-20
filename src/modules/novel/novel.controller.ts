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
import { NovelDTO } from './novel.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('novel')
@ApiTags('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Post()
  async create(@Body() data: NovelDTO) {
    return this.novelService.create(data);
  }

  @Get()
  async findAll() {
    return this.novelService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.novelService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: NovelDTO) {
    return this.novelService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.novelService.delete(id);
  }
}
