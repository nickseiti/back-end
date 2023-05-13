import { Story } from 'src/modules/story/story.model';
import { StoryDTO } from 'src/modules/story/story.dto';
import { NovelMapper } from './novel.mapper';
import { ComicMapper } from './comic.mapper';

export class StoryMapper {
  static dtoToEntity(dto: StoryDTO): Story {
    return {
      _id: dto.id,
      name: dto.name,
      novel: NovelMapper.dtoToEntity(dto.novel),
      comic: ComicMapper.dtoToEntity(dto.comic),
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }

  static dtoListToEntity(dto: StoryDTO[]): Story[] {
    const storys: Story[] = [];
    dto.forEach((story) => {
      storys.push(StoryMapper.dtoToEntity(story));
    });
    return storys;
  }

  static entityToDTO(entity: Story): StoryDTO {
    return {
      id: entity._id,
      name: entity.name,
      novel: NovelMapper.entityToDTO(entity.novel),
      comic: ComicMapper.entityToDTO(entity.comic),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static entityListToDTO(entity: Story[]): StoryDTO[] {
    const dtos: StoryDTO[] = [];
    entity.forEach((story) => {
      dtos.push(StoryMapper.entityToDTO(story));
    });
    return dtos;
  }
}
