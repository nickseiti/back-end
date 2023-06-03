import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ComicService } from './comic.service';
import { ComicDTO, CreateComicDTO, UpdateComicDTO } from './dto/index';
import { ApiTags } from '@nestjs/swagger';

@Controller('comic')
@ApiTags('comic')
export class ComicController {
  constructor(private readonly comicService: ComicService) {}
  @Post()
  async create(@Body() data: CreateComicDTO): Promise<ComicDTO> {
    return this.comicService.create(data);
  }

  @Get()
  async findAll(): Promise<ComicDTO[]> {
    return this.comicService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ComicDTO> {
    return this.comicService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateComicDTO,
  ): Promise<ComicDTO> {
    return this.comicService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ComicDTO> {
    return this.comicService.delete(id);
  }
}
