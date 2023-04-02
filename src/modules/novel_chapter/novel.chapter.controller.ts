import { Controller } from '@nestjs/common';
import { NovelChapterService } from './novel.chapter.service';

@Controller('novelChapter')
export class NovelChapterController {
  constructor(private readonly novelChapterService: NovelChapterService) {}
}
