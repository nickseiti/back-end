import { Injectable } from '@nestjs/common';
import { StoryRepository } from './story.repository';
import { StoryMapper } from 'src/common/mappers';
import { NovelService } from '../novel/novel.service';
import { ComicService } from '../comic/comic.service';
import { CreateStoryDTO, UpdateStoryDTO, StoryDTO } from './dto/index';

@Injectable()
export class StoryService {
  constructor(
    private readonly storyRepository: StoryRepository,
    private readonly novelService: NovelService,
    private readonly comicService: ComicService,
  ) {}

  async create(data: CreateStoryDTO): Promise<StoryDTO | null> {
    const storyDTO: StoryDTO = StoryMapper.entityToDTO(
      await this.storyRepository.create(data),
    );

    return storyDTO;
  }

  async findAll(): Promise<StoryDTO[] | null> {
    return StoryMapper.entityListToDTO(await this.storyRepository.findAll());
  }

  async findById(id: string): Promise<StoryDTO | null> {
    return StoryMapper.entityToDTO(await this.storyRepository.findById(id));
  }

  async update(id: string, data: UpdateStoryDTO): Promise<StoryDTO | null> {
    const storyDTO: StoryDTO = StoryMapper.entityToDTO(
      await this.storyRepository.update(id, data),
    );

    return storyDTO;
  }

  async delete(id: string): Promise<StoryDTO | null> {
    const storyDTO: StoryDTO = await this.findById(id);
    if (storyDTO.novel) {
      this.novelService.delete(storyDTO.novel.id);
    }
    if (storyDTO.comic) {
      this.comicService.delete(storyDTO.comic.id);
    }
    return StoryMapper.entityToDTO(await this.storyRepository.delete(id));
  }
}
