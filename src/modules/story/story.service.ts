import { Injectable } from '@nestjs/common';
import { StoryRepository } from './story.repository';
import { ComicMapper, NovelMapper, StoryMapper } from 'src/common/mappers';
import { NovelService } from '../novel/novel.service';
import { ComicService } from '../comic/comic.service';
import {
  CreateStoryDTO,
  UpdateStoryDTO,
  StoryDTO,
  UpdateChildDTO,
} from './dto/index';
import { isEmpty } from 'class-validator';
import * as lodash from 'lodash';

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
        StoryMapper.updateDtoToEntity(data),
      ),
    );

    if (!isEmpty(data.novel)) {
      data.novel.storyName = data.name;
      storyDTO.novel = await this.checkToUpdateChildren(
        data.novel,
        this.novelService,
        NovelMapper,
      );
    }
    if (!isEmpty(data.comic)) {
      data.comic.storyName = data.name;
      storyDTO.comic = await this.checkToUpdateChildren(
        data.comic,
        this.comicService,
        ComicMapper,
      );
    }
    return storyDTO;
  }

  async delete(id: string): Promise<StoryDTO | null> {
    const storyDTO: StoryDTO = await this.findById(id);
    if (!isEmpty(storyDTO.novel)) {
      this.novelService.delete(storyDTO.novel.id);
    }
    if (!isEmpty(storyDTO.comic)) {
      this.comicService.delete(storyDTO.comic.id);
    }
    return StoryMapper.entityToDTO(await this.storyRepository.delete(id));
  }

  async checkToUpdateChildren(
    newUpdateDtoChild: UpdateChildDTO,
    service: any,
    storyChildMapper: any,
  ): Promise<any> {
    const oldUpdateDtoChild: UpdateChildDTO = storyChildMapper.dtoToUpdateDto(
      await service.findById(newUpdateDtoChild.id),
    );
    if (!lodash.isEqual(newUpdateDtoChild, oldUpdateDtoChild)) {
      return await this.novelService.update(
        oldUpdateDtoChild.id,
        newUpdateDtoChild,
      );
    }
    return storyChildMapper.updateDtoToDto(newUpdateDtoChild);
  }
}
