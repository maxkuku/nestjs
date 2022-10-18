import { Injectable } from '@nestjs/common';
import { Comment } from '../../../api/dto/comment.dto';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class CommentsService {
  constructor(private readonly postsService: PostsService) {}

  async getComments(postId: number): Promise<Comment[]> {
    const posts = await this.postsService.getPosts();
    return posts[postId].comments;
  }

  async getComment(postId: number, commentId: number): Promise<Comment> {
    const posts = await this.postsService.getPosts();
    return posts[postId].comments[commentId];
  }

  async editComment(
    postId: number,
    commentId: number,
    newText: string,
  ): Promise<Comment> {
    const posts = await this.postsService.getPosts();
    if (newText) posts[postId].comments[commentId].text = newText;
    return posts[postId].comments[commentId];
  }

  async createComment(postId: number, data: Comment): Promise<Comment> {
    const posts = await this.postsService.getPosts();
    posts[postId].comments.push(data);
    return data;
  }

  async deleteComment(postId: number, commentId: number): Promise<Comment> {
    const posts = await this.postsService.getPosts();
    const post = posts[postId];
    const comment = post.comments[commentId];
    if (comment) {
      post.comments.splice(commentId - 1, 1);
      return post;
    } else throw new Error(`Comment not found`);
  }

  updateComments(data: Comment): Comment | PromiseLike<Comment> {
    throw new Error('Method not implemented.');
  }
}
