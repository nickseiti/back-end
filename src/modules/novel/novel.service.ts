import { Injectable } from '@nestjs/common';
import { NovelDTO } from './novel.dto';
import { NovelRepository } from './novel.repository';
import { NovelMapper } from 'src/common/mappers';

@Injectable()
export class NovelService {
  constructor(private readonly novelRepository: NovelRepository) {}

  async create(data: NovelDTO): Promise<NovelDTO | null> {
    return NovelMapper.entityToDTO(await this.novelRepository.create(data));
  }

  async findAll(): Promise<NovelDTO[] | null> {
    return NovelMapper.dtoListToEntity(await this.novelRepository.findAll());
  }

  async findById(data: string): Promise<NovelDTO | null> {
    return NovelMapper.entityToDTO(await this.novelRepository.findById(data));
  }

  async update(id: string, data: NovelDTO): Promise<NovelDTO | null> {
    return NovelMapper.entityToDTO(await this.novelRepository.update(id, data));
  }

  async delete(id: string): Promise<NovelDTO | null> {
    return NovelMapper.entityToDTO(await this.novelRepository.delete(id));
  }
}
