import { ArticleController } from '@app/article/article.controller';
import { ArticleService } from '@app/article/article.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
