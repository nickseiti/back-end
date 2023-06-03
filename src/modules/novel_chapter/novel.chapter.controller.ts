import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NovelChapterService } from './novel.chapter.service';
import {
  NovelChapterDTO,
  CreateNovelChapterDTO,
  UpdateNovelChapterDTO,
} from './dto/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('novelChapter')
@ApiTags('novelChapter')
export class NovelChapterController {
  constructor(private readonly novelChapterService: NovelChapterService) {}

  @Post()
  async create(@Body() data: CreateNovelChapterDTO): Promise<NovelChapterDTO> {
    return this.novelChapterService.create(data);
  }

  @Get()
  async findAll(): Promise<NovelChapterDTO[]> {
    return this.novelChapterService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<NovelChapterDTO> {
    return this.novelChapterService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateNovelChapterDTO,
  ): Promise<NovelChapterDTO> {
    return this.novelChapterService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<NovelChapterDTO> {
    return this.novelChapterService.delete(id);
  }
}
