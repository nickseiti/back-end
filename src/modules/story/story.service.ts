import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { StoryDTO } from './story.dto';
import { StoryMapper } from 'src/mappers/story.mapper';

@Injectable()
export class StoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: StoryDTO) {
    const storyEntity = StoryMapper.dtoToEntity(data);
    const story = await this.prisma.story.create({
      data: storyEntity,
    });

    return story;
  }

  async findAll() {
    return this.prisma.story.findMany();
  }

  async findById(data: string) {
    const story = await this.prisma.story.findUnique({ where: { id: data } });

    return story;
  }

  async update(id: string, data: StoryDTO) {
    const storyEntity = StoryMapper.dtoToEntity(data);

    const story = await this.prisma.story.update({
      data: storyEntity,
      where: { id },
    });
    return story;
  }

  async delete(id: string) {
    const story = await this.prisma.story.delete({
      where: { id },
    });

    return story;
  }
}
