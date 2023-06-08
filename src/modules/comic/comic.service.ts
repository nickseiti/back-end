import { Injectable } from '@nestjs/common';
import { ComicDTO, CreateComicDTO, UpdateComicDTO } from './dto/index';
import { ComicRepository } from './comic.repository';
import { ComicMapper } from 'src/common/mappers';

@Injectable()
export class ComicService {
  constructor(private readonly comicRepository: ComicRepository) {}

  async create(data: CreateComicDTO): Promise<ComicDTO | null> {
    return ComicMapper.entityToDTO(
      await this.comicRepository.create(ComicMapper.createDtoToEntity(data)),
    );
  }

  async findAll(): Promise<ComicDTO[] | null> {
    return ComicMapper.entityListToDTO(await this.comicRepository.findAll());
  }

  async findById(id: string): Promise<ComicDTO | null> {
    return ComicMapper.entityToDTO(await this.comicRepository.findById(id));
  }

  async update(id: string, data: UpdateComicDTO): Promise<ComicDTO | null> {
    return ComicMapper.entityToDTO(
      await this.comicRepository.update(
        id,
        ComicMapper.updateDtoToEntity(data),
      ),
    );
  }

  async delete(id: string): Promise<ComicDTO | null> {
    return ComicMapper.entityToDTO(await this.comicRepository.delete(id));
  }
}
