import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Posts } from './posts.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('get-all')
  async getPosts(): Promise<Posts[]> {
    return this.postsService.getPosts();
  }

  // получить одну через querystring ?id=1
  @Get('get-one/:id')
  async getPost(@Param('id') id: number): Promise<Posts | undefined> {
    return this.postsService.getPost(id);
  }

  @Post('create')
  async createPost(@Body() data: Posts): Promise<Posts> {
    return this.postsService.createPost(data);
  }

  @Put('update')
  async updatePost(@Body() data: Posts): Promise<Posts> {
    return this.postsService.updatePosts(data);
  }

  @Delete('delete')
  async deletePost(@Body() body: { id: number }): Promise<Posts[]> {
    return this.postsService.deletePost(body.id);
  }
}
