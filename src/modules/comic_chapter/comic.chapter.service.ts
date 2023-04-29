import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { ComicChapterDTO } from './comic.chapter.dto';
import { ComicChapterMapper } from 'src/common/mappers/comic.chapter.mapper';

@Injectable()
export class ComicChapterService {
  constructor(private prisma: PrismaService) {}

  async create(data: ComicChapterDTO) {
    const comicChapterEntity = ComicChapterMapper.dtoToEntity(data);
    const comicChapter = await this.prisma.comicChapter.create({
      data: comicChapterEntity,
    });

    return comicChapter;
  }

  async findAll() {
    return this.prisma.novel.findMany();
  }

  async findById(data: string) {
    const comicChapter = await this.prisma.comicChapter.findUnique({
      where: { id: data },
    });

    return comicChapter;
  }

  async update(id: string, data: ComicChapterDTO) {
    const comicChapterEntity = ComicChapterMapper.dtoToEntity(data);
    const comicChapter = await this.prisma.comicChapter.update({
      data: comicChapterEntity,
      where: { id },
    });
    return comicChapter;
  }

  async delete(id: string) {
    const comicChapter = await this.prisma.comicChapter.delete({
      where: { id },
    });

    return comicChapter;
  }
}
