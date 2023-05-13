import { Injectable } from '@nestjs/common';
import { NovelChapterDTO } from './novel.chapter.dto';
import { NovelChapterRepository } from './novel.chapter.repository';
import { NovelChapter } from './novel.chapter.model';
import { NovelChapterMapper } from 'src/common/mappers';

@Injectable()
export class NovelChapterService {
  constructor(
    private readonly novelChapterRepository: NovelChapterRepository,
  ) {}

  async create(data: NovelChapterDTO): Promise<NovelChapter | null> {
    return NovelChapterMapper.entityToDTO(
      await this.novelChapterRepository.create(data),
    );
  }

  async findAll(): Promise<NovelChapter[] | null> {
    return NovelChapterMapper.entityListToDTO(
      await this.novelChapterRepository.findAll(),
    );
  }

  async findById(data: string): Promise<NovelChapter | null> {
    return NovelChapterMapper.entityToDTO(
      await this.novelChapterRepository.findById(data),
    );
  }

  async update(
    id: string,
    data: NovelChapterDTO,
  ): Promise<NovelChapter | null> {
    return NovelChapterMapper.entityToDTO(
      await this.novelChapterRepository.update(id, data),
    );
  }

  async delete(id: string): Promise<NovelChapter | null> {
    return NovelChapterMapper.entityToDTO(
      await this.novelChapterRepository.delete(id),
    );
  }
}
