import { Controller } from '@nestjs/common';
import { ComicChapterService } from './comic.chapter.service';

@Controller('comicChapter')
export class ComicChapterController {
  constructor(private readonly comicChapterService: ComicChapterService) {}
}
