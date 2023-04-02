import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { StoryDTO } from './story.dto';

@Injectable()
export class StoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: StoryDTO) {
    const story = await this.prisma.story.create({
      data: { name: data.name },
    });

    return story;
  }
}
