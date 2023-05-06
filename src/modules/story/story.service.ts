import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import {
  ComicMapper,
  NovelMapper,
  StoryMapper,
  NovelChapterMapper,
  ComicChapterMapper,
} from 'src/common/mappers/index';
import { isEmpty } from 'class-validator';
import { StoryDTO } from 'src/modules/story/story.dto';
import {
  Comic,
  ComicChapter,
  Novel,
  NovelChapter,
  Story,
} from '@prisma/client';

@Injectable()
export class StoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: StoryDTO): Promise<StoryDTO | null> {
    const storyEntity: Story = StoryMapper.dtoToEntity(data);
    const novelEntity: Novel = NovelMapper.dtoToEntity(data.novel);
    const comicEntity: Comic = ComicMapper.dtoToEntity(data.comic);
    const novelChaptersEntity: NovelChapter[] =
      NovelChapterMapper.dtoListToEntity(data.novel.chapters);
    const comicChaptersEntity: ComicChapter[] =
      ComicChapterMapper.dtoListToEntity(data.comic.chapters);

    const story: StoryDTO = await this.prisma.story.create({
      data: storyEntity,
      include: {
        novel: { include: { chapters: true } },
        comic: { include: { chapters: true } },
      },
    });

    if (story.id != null) {
      if (!isEmpty(data.novel)) {
        story.novel = await this.prisma.novel.create({
          data: novelEntity,
          include: { chapters: true },
        });

        if (story.novel.id != null) {
          if (!isEmpty(data.novel.chapters)) {
            novelChaptersEntity.forEach((novelChapterEntity) => {
              this.prisma.novelChapter.create({
                data: novelChapterEntity,
              });
            });
          }
        }
      }

      if (!isEmpty(data.comic)) {
        story.comic = await this.prisma.comic.create({
          data: comicEntity,
          include: { chapters: true },
        });

        if (!isEmpty(data.novel.chapters)) {
          comicChaptersEntity.forEach((comicChapterEntity) => {
            this.prisma.comicChapter.create({
              data: comicChapterEntity,
            });
          });
        }
      }
    }

    return story;
  }

  async findAll(): Promise<StoryDTO[] | null> {
    return this.prisma.story.findMany({
      include: {
        novel: { include: { chapters: true } },
        comic: { include: { chapters: true } },
      },
    });
  }

  async findById(data: string): Promise<StoryDTO | null> {
    const story: StoryDTO = await this.prisma.story.findUnique({
      where: { id: data },
      include: {
        novel: { include: { chapters: true } },
        comic: { include: { chapters: true } },
      },
    });

    return story;
  }

  async update(id: string, data: StoryDTO): Promise<StoryDTO | null> {
    const storyEntity: Story = StoryMapper.dtoToEntity(data);

    const story: StoryDTO = await this.prisma.story.update({
      data: storyEntity,
      where: { id },
    });
    return story;
  }

  async delete(id: string): Promise<StoryDTO | null> {
    const story: StoryDTO = await this.prisma.story.delete({
      where: { id },
    });

    return story;
  }
}
