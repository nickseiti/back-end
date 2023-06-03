import { Injectable } from '@nestjs/common';
import { NovelDTO, CreateNovelDTO, UpdateNovelDTO } from './dto/index';
import { NovelRepository } from './novel.repository';
import { NovelMapper } from 'src/common/mappers';
import { NovelChapterService } from '../novel_chapter/novel.chapter.service';

@Injectable()
export class NovelService {
  constructor(
    private readonly novelRepository: NovelRepository,
    private readonly novelChapterService: NovelChapterService,
  ) {}

  async create(data: CreateNovelDTO): Promise<NovelDTO | null> {
    const novelDTO = NovelMapper.entityToDTO(
      await this.novelRepository.create(data),
    );

    return novelDTO;
  }

  async findAll(): Promise<NovelDTO[] | null> {
    return NovelMapper.entityListToDTO(await this.novelRepository.findAll());
  }

  async findById(id: string): Promise<NovelDTO | null> {
    return NovelMapper.entityToDTO(await this.novelRepository.findById(id));
  }

  async update(id: string, data: UpdateNovelDTO): Promise<NovelDTO | null> {
    return NovelMapper.entityToDTO(await this.novelRepository.update(id, data));
  }

  async delete(id: string): Promise<NovelDTO | null> {
    return NovelMapper.entityToDTO(await this.novelRepository.delete(id));
  }
}
