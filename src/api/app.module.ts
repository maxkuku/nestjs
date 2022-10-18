import { Module } from '@nestjs/common';
import { PostsController } from '../api/controllers/posts.controller';
import { CommentsController } from '../api/controllers/comments.controller';
import { PostsService } from '../api/modules/posts/posts.service';
import { CommentsService } from '../api/modules/comments/comments.service';
import { PostsModule } from '../api/modules/posts/posts.module';
import { CalcModule } from '../calc/calc.module';
import { CommentsModule } from '../api/modules/comments/comments.module';

@Module({
  imports: [PostsModule, CommentsModule, CalcModule],
  controllers: [PostsController, CommentsController],
  providers: [PostsService, CommentsService],
})
export class AppModule {}
