import { Controller } from '@nestjs/common';
import { NovelService } from './novel.service';

@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}
}
