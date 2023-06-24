import { Story } from 'src/modules/story/story.model';
import {
  CreateStoryDTO,
  StoryDTO,
  UpdateStoryDTO,
} from 'src/modules/story/dto/index';
import { NovelMapper } from './novel.mapper';
import { ComicMapper } from './comic.mapper';
import { isEmpty } from 'class-validator';

export class StoryMapper {
  static dtoToEntity(dto: StoryDTO): Story {
    if (!isEmpty(dto)) {
      return {
        _id: dto.id,
        name: dto.name,
        novel: NovelMapper.dtoToEntity(dto.novel),
        comic: ComicMapper.dtoToEntity(dto.comic),
        createdAt: dto.createdAt,
        updatedAt: dto.updatedAt,
      };
    }
    return null;
  }

  static dtoListToEntity(dto: StoryDTO[]): Story[] {
    const storys: Story[] = [];
    if (dto.length > 0) {
      dto.forEach((story) => {
        storys.push(StoryMapper.dtoToEntity(story));
      });
    }

    return storys;
  }

  static entityToDTO(entity: Story): StoryDTO {
    if (!isEmpty(entity)) {
      return {
        id: entity._id,
        name: entity.name,
        novel: NovelMapper.entityToDTO(entity.novel),
        comic: ComicMapper.entityToDTO(entity.comic),
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
      };
    }
    return null;
  }

  static entityListToDTO(entity: Story[]): StoryDTO[] {
    const dtos: StoryDTO[] = [];
    if (entity.length > 0) {
      entity.forEach((story) => {
        dtos.push(StoryMapper.entityToDTO(story));
      });
    }

    return dtos;
  }

  static createDtoToEntity(dto: CreateStoryDTO): Story {
    if (!isEmpty(dto)) {
      return {
        name: dto.name,
      };
    }
    return null;
  }

  static createDtoListToEntity(dto: CreateStoryDTO[]): Story[] {
    const storys: Story[] = [];
    if (dto.length > 0) {
      dto.forEach((story) => {
        storys.push(StoryMapper.createDtoToEntity(story));
      });
    }

    return storys;
  }

  static updateDtoToEntity(dto: UpdateStoryDTO): Story {
    if (!isEmpty(dto)) {
      if (!isEmpty(dto.comic)) {
        if (!isEmpty(dto.novel)) {
          return {
            _id: dto.id,
            name: dto.name,
            novel: NovelMapper.updateDtoToEntity(dto.novel),
            comic: ComicMapper.updateDtoToEntity(dto.comic),
          };
        }
        return {
          _id: dto.id,
          name: dto.name,
          comic: ComicMapper.updateDtoToEntity(dto.comic),
        };
      }
      if (!isEmpty(dto.novel)) {
        return {
          _id: dto.id,
          name: dto.name,
          novel: NovelMapper.updateDtoToEntity(dto.novel),
        };
      }
      return {
        _id: dto.id,
        name: dto.name,
      };
    }
    return null;
  }

  static updateDtoListToEntity(dto: UpdateStoryDTO[]): Story[] {
    const storys: Story[] = [];
    if (dto.length > 0) {
      dto.forEach((story) => {
        storys.push(StoryMapper.createDtoToEntity(story));
      });
    }

    return storys;
  }

  static dtoToUpdateDto(dto: StoryDTO): UpdateStoryDTO {
    if (!isEmpty(dto)) {
      return {
        id: dto.id,
        name: dto.name,
        comic: ComicMapper.dtoToUpdateDto(dto.comic),
        novel: NovelMapper.dtoToUpdateDto(dto.novel),
      };
    }
  }
}
