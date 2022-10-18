import { Injectable } from '@nestjs/common';
import { Posts } from '../../dto/post.dto';

const posts: Posts[] = [
  {
    id: 1,
    name: 'fitst',
    description: 'first',
    text: 'first text',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    comments: [
      {
        id: 1,
        text: 'comment 1',
        createdAt: new Date(Date.now()),
      },
      {
        id: 2,
        text: 'second comment',
        createdAt: new Date(Date.now()),
      },
    ],
  },
];

@Injectable()
export class PostsService {
  postsService: any;
  async getPosts(): Promise<Posts[]> {
    return posts;
  }

  async createPost(data: Posts): Promise<Posts> {
    posts.push(data);
    return data;
  }

  async updatePost(data: Posts): Promise<Posts> {
    let existingPost = posts[data.id];
    existingPost = {
      ...existingPost,
      ...data,
    };
    posts[data.id] = existingPost;
    return posts[data.id];
  }

  async deletePost(id: number): Promise<Posts[]> {
    const post = posts[id];
    if (post) {
      posts.splice(id - 1, 1);
      return posts;
    } else throw new Error('Post not found');
  }

  async getPost(postId: number): Promise<Posts> {
    const post = posts[postId];
    // console.log(postId); // 1
    if (post) {
      return posts[postId];
    } else throw new Error('Post not found');
  }
}
