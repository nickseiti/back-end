import { Injectable } from '@nestjs/common';
import { NovelChapterDTO } from './novel.chapter.dto';
import { NovelChapterRepository } from './novel.chapter.repository';
import { NovelChapterMapper } from 'src/common/mappers';

@Injectable()
export class NovelChapterService {
  constructor(
    private readonly novelChapterRepository: NovelChapterRepository,
  ) {}

  async create(data: NovelChapterDTO): Promise<NovelChapterDTO | null> {
    return NovelChapterMapper.entityToDTO(
      await this.novelChapterRepository.create(
        NovelChapterMapper.dtoToEntity(data),
      ),
    );
  }

  async findAll(): Promise<NovelChapterDTO[] | null> {
    return NovelChapterMapper.entityListToDTO(
      await this.novelChapterRepository.findAll(),
    );
  }

  async findById(id: string): Promise<NovelChapterDTO | null> {
    return NovelChapterMapper.entityToDTO(
      await this.novelChapterRepository.findById(id),
    );
  }

  async update(
    id: string,
    data: NovelChapterDTO,
  ): Promise<NovelChapterDTO | null> {
    return NovelChapterMapper.entityToDTO(
      await this.novelChapterRepository.update(
        id,
        NovelChapterMapper.dtoToEntity(data),
      ),
    );
  }

  async delete(id: string): Promise<NovelChapterDTO | null> {
    return NovelChapterMapper.entityToDTO(
      await this.novelChapterRepository.delete(id),
    );
  }
}
