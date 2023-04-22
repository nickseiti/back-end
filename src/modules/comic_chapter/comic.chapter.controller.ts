import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ComicChapterService } from './comic.chapter.service';
import { ComicChapterDTO } from './comic.chapter.dto';

@Controller('comicChapter')
export class ComicChapterController {
  constructor(private readonly comicChapterService: ComicChapterService) {}

  @Post()
  async create(@Body() data: ComicChapterDTO) {
    return this.comicChapterService.create(data);
  }

  @Get()
  async findAll() {
    return this.comicChapterService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.comicChapterService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ComicChapterDTO) {
    return this.comicChapterService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.comicChapterService.delete(id);
  }
}
