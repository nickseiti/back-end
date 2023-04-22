import { Injectable } from '@nestjs/common';
import { NovelDTO } from './novel.dto';
import { PrismaService } from 'src/database/prisma.service';
import { NovelMapper } from 'src/mappers/novel.mapper';

@Injectable()
export class NovelService {
  constructor(private prisma: PrismaService) {}

  async create(data: NovelDTO) {
    const novelEntity = NovelMapper.dtoToEntity(data);
    const novel = await this.prisma.novel.create({
      data: novelEntity,
    });

    return novel;
  }

  async findAll() {
    return this.prisma.novel.findMany({ include: { chapters: true } });
  }

  async findById(data: string) {
    const novel = await this.prisma.novel.findUnique({
      where: { id: data },
      include: { chapters: true },
    });

    return novel;
  }

  async update(id: string, data: NovelDTO) {
    const novelEntity = NovelMapper.dtoToEntity(data);
    const novel = await this.prisma.novel.update({
      data: novelEntity,
      where: { id },
    });
    return novel;
  }

  async delete(id: string) {
    const novel = await this.prisma.novel.delete({
      where: { id },
    });

    return novel;
  }
}
