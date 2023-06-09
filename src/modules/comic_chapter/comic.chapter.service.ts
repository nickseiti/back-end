import { Injectable } from '@nestjs/common';
import { ComicChapterDTO } from './comic.chapter.dto';
import { ComicChapterRepository } from './comic.chapter.repository';
import { ComicChapterMapper } from 'src/common/mappers';

@Injectable()
export class ComicChapterService {
  constructor(
    private readonly comicChapterRepository: ComicChapterRepository,
  ) {}

  async create(data: ComicChapterDTO): Promise<ComicChapterDTO | null> {
    return ComicChapterMapper.entityToDTO(
      await this.comicChapterRepository.create(
        ComicChapterMapper.dtoToEntity(data),
      ),
    );
  }

  async findAll(): Promise<ComicChapterDTO[] | null> {
    return ComicChapterMapper.entityListToDTO(
      await this.comicChapterRepository.findAll(),
    );
  }

  async findById(id: string): Promise<ComicChapterDTO | null> {
    return ComicChapterMapper.entityToDTO(
      await this.comicChapterRepository.findById(id),
    );
  }

  async update(
    id: string,
    data: ComicChapterDTO,
  ): Promise<ComicChapterDTO | null> {
    return ComicChapterMapper.entityToDTO(
      await this.comicChapterRepository.update(
        id,
        ComicChapterMapper.dtoToEntity(data),
      ),
    );
  }

  async delete(id: string): Promise<ComicChapterDTO | null> {
    return ComicChapterMapper.entityToDTO(
      await this.comicChapterRepository.delete(id),
    );
  }
}
