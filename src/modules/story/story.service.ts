import { Injectable } from '@nestjs/common';
import { StoryDTO } from 'src/modules/story/story.dto';
import { StoryRepository } from './story.repository';
import { StoryMapper } from 'src/common/mappers';
@Injectable()
export class StoryService {
  constructor(private readonly storyRepository: StoryRepository) {}

  async create(data: StoryDTO): Promise<StoryDTO | null> {
    return StoryMapper.entityToDTO(await this.storyRepository.create(data));
  }

  async findAll(): Promise<StoryDTO[] | null> {
    return StoryMapper.entityListToDTO(await this.storyRepository.findAll());
  }

  async findById(id: string): Promise<StoryDTO | null> {
    return StoryMapper.entityToDTO(await this.storyRepository.findById(id));
  }

  async update(id: string, data: StoryDTO): Promise<StoryDTO | null> {
    return StoryMapper.entityToDTO(
      await this.storyRepository.update(id, StoryMapper.dtoToEntity(data)),
    );
  }

  async delete(id: string): Promise<StoryDTO | null> {
    return StoryMapper.entityToDTO(await this.storyRepository.delete(id));
  }
}
