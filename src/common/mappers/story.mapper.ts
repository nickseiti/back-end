import { Story } from 'src/modules/story/story.model';
import {
  CreateStoryDTO,
  StoryDTO,
  UpdateStoryDTO,
} from 'src/modules/story/dto/index';
import { NovelMapper } from './novel.mapper';
import { ComicMapper } from './comic.mapper';
import { UpdateNovelDTO } from 'src/modules/novel/dto';
import { UpdateComicDTO } from 'src/modules/comic/dto';

export class StoryMapper {
  static dtoToEntity(dto: StoryDTO): Story {
    if (dto) {
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
    if (dto) {
      dto.forEach((story) => {
        storys.push(StoryMapper.dtoToEntity(story));
      });
    }

    return storys;
  }

  static entityToDTO(entity: Story): StoryDTO {
    if (entity) {
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
    if (entity) {
      entity.forEach((story) => {
        dtos.push(StoryMapper.entityToDTO(story));
      });
    }

    return dtos;
  }

  static createDtoToEntity(dto: CreateStoryDTO): Story {
    if (dto) {
      return {
        name: dto.name,
      };
    }
    return null;
  }

  static createDtoListToEntity(dto: CreateStoryDTO[]): Story[] {
    const storys: Story[] = [];
    if (dto) {
      dto.forEach((story) => {
        storys.push(StoryMapper.createDtoToEntity(story));
      });
    }

    return storys;
  }

  static updateDtoToEntity(
    dto: UpdateStoryDTO,
    novel: UpdateNovelDTO,
    comic: UpdateComicDTO,
  ): Story {
    if (dto) {
      return {
        _id: dto.id,
        name: dto.name,
        novel: NovelMapper.updateDtoToEntity(novel),
        comic: ComicMapper.updateDtoToEntity(comic),
      };
    }
    return null;
  }

  static updateDtoListToEntity(dto: UpdateStoryDTO[]): Story[] {
    const storys: Story[] = [];
    if (dto) {
      dto.forEach((story) => {
        storys.push(StoryMapper.createDtoToEntity(story));
      });
    }

    return storys;
  }
}
