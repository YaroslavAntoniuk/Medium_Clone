import { ArticleService } from '@app/article/article.service';
import { Controller, Post } from '@nestjs/common';

@Controller('api/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Post()
  async create() {
    return this.articleService.createArticle();
  }
}
