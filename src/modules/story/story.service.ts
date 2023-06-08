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
      await this.storyRepository.create(StoryMapper.createDtoToEntity(data)),
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
      await this.storyRepository.update(
        id,
        StoryMapper.updateDtoToEntity(data, data.novel, data.comic),
      ),
    );

    if (data.novel) {
      // eslint-disable-next-line prefer-const
      let novel: UpdateNovelDTO = NovelMapper.dtoToUpdateDto(
        await this.novelService.findById(data.novel.id),
      );
      novel.storyName = data.name;
      storyDTO.novel = await this.novelService.update(data.novel.id, novel);
    }
    if (data.comic) {
      // eslint-disable-next-line prefer-const
      let comic: UpdateComicDTO = ComicMapper.dtoToUpdateDto(
        await this.comicService.findById(data.comic.id),
      );
      comic.storyName = data.name;
      storyDTO.comic = await this.comicService.update(data.comic.id, comic);
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
