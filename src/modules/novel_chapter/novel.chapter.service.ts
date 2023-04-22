import { Injectable } from '@nestjs/common';
import { NovelChapterDTO } from './novel.chapter.dto';
import { PrismaService } from 'src/database/prisma.service';
import { NovelChapterMapper } from 'src/mappers/novel.chapter.mapper';

@Injectable()
export class NovelChapterService {
  constructor(private prisma: PrismaService) {}

  async create(data: NovelChapterDTO) {
    const novelChapterEntity = NovelChapterMapper.dtoToEntity(data);
    const novelChapter = await this.prisma.novelChapter.create({
      data: novelChapterEntity,
    });

    return novelChapter;
  }

  async findAll() {
    return this.prisma.novel.findMany();
  }

  async findById(data: string) {
    const novelChapter = await this.prisma.novelChapter.findUnique({
      where: { id: data },
    });

    return novelChapter;
  }

  async update(id: string, data: NovelChapterDTO) {
    const novelChapterEntity = NovelChapterMapper.dtoToEntity(data);
    const novelChapter = await this.prisma.novelChapter.update({
      data: novelChapterEntity,
      where: { id },
    });
    return novelChapter;
  }

  async delete(id: string) {
    const novelChapter = await this.prisma.novelChapter.delete({
      where: { id },
    });

    return novelChapter;
  }
}
