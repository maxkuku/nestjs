import { Module } from '@nestjs/common';
import { CommentsController } from '../../controllers/comments.controller';
import { PostsModule } from '../posts/posts.module';
import { CommentsService } from './comments.service';

@Module({
  imports: [PostsModule],
  controllers: [CommentsController],
  providers: [Array, CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
