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
import {
  ComicChapterDTO,
  CreateComicChapterDTO,
  UpdateComicChapterDTO,
} from './dto/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('comicChapter')
@ApiTags('comicChapter')
export class ComicChapterController {
  constructor(private readonly comicChapterService: ComicChapterService) {}

  @Post()
  async create(@Body() data: CreateComicChapterDTO): Promise<ComicChapterDTO> {
    return this.comicChapterService.create(data);
  }

  @Get()
  async findAll(): Promise<ComicChapterDTO[]> {
    return this.comicChapterService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ComicChapterDTO> {
    return this.comicChapterService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateComicChapterDTO,
  ): Promise<ComicChapterDTO> {
    return this.comicChapterService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.comicChapterService.delete(id);
  }
}
