import { Injectable } from '@nestjs/common';
import { StoryRepository } from './story.repository';
import { ComicMapper, NovelMapper, StoryMapper } from 'src/common/mappers';
import { NovelService } from '../novel/novel.service';
import { ComicService } from '../comic/comic.service';
import { CreateStoryDTO, UpdateStoryDTO, StoryDTO } from './dto/index';
import { UpdateComicDTO } from '../comic/dto/index';
import { UpdateNovelDTO } from '../novel/dto/index';

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

    console.log(data);

    if (data.novelId) {
      console.log('entrou');
      const novel: UpdateNovelDTO = NovelMapper.dtoToUpdateDto(
        await this.novelService.findById(data.novelId),
      );
      novel.storyName = data.name;
      console.log(novel);
      storyDTO.novel = await this.novelService.update(data.novelId, novel);
    }
    if (data.comicId) {
      const comic: UpdateComicDTO = ComicMapper.dtoToUpdateDto(
        await this.comicService.findById(data.comicId),
      );
      comic.storyName = data.name;
      storyDTO.comic = await this.comicService.update(data.comicId, comic);
    }
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
