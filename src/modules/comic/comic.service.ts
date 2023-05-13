import { Injectable } from '@nestjs/common';
import { ComicDTO } from './comic.dto';
import { ComicRepository } from './comic.repository';
import { ComicMapper } from 'src/common/mappers';

@Injectable()
export class ComicService {
  constructor(private readonly comicRepository: ComicRepository) {}

  async create(data: ComicDTO): Promise<ComicDTO | null> {
    return ComicMapper.entityToDTO(await this.comicRepository.create(data));
  }

  async findAll(): Promise<ComicDTO[] | null> {
    return ComicMapper.entityListToDTO(await this.comicRepository.findAll());
  }

  async findById(data: string): Promise<ComicDTO | null> {
    return ComicMapper.entityToDTO(await this.comicRepository.findById(data));
  }

  async update(id: string, data: ComicDTO): Promise<ComicDTO | null> {
    return ComicMapper.entityToDTO(await this.comicRepository.update(id, data));
  }

  async delete(id: string): Promise<ComicDTO | null> {
    return ComicMapper.entityToDTO(await this.comicRepository.delete(id));
  }
}
