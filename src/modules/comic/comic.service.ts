import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ComicMapper } from 'src/mappers/comic.mapper';
import { ComicDTO } from './comic.dto';

@Injectable()
export class ComicService {
  constructor(private prisma: PrismaService) {}

  async create(data: ComicDTO) {
    const comicEntity = ComicMapper.dtoToEntity(data);
    const comic = await this.prisma.comic.create({
      data: comicEntity,
    });

    return comic;
  }

  async findAll() {
    return this.prisma.comic.findMany({ include: { chapters: true } });
  }

  async findById(data: string) {
    const comic = await this.prisma.comic.findUnique({
      where: { id: data },
      include: { chapters: true },
    });

    return comic;
  }

  async update(id: string, data: ComicDTO) {
    const comicEntity = ComicMapper.dtoToEntity(data);
    const comic = await this.prisma.comic.update({
      data: comicEntity,
      where: { id },
    });
    return comic;
  }

  async delete(id: string) {
    const comic = await this.prisma.comic.delete({
      where: { id },
    });

    return comic;
  }
}
