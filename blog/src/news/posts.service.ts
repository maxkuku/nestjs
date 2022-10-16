import { Injectable } from '@nestjs/common';
import { Posts } from './posts.interface';

const posts: Posts[] = [
  {
    id: 1,
    name: 'fitst posts name',
    description: 'first posts description',
    text: 'first posts text',
    author: 'author',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
];

// здесь методы создания и получения постов

@Injectable()
export class PostsService {
  private readonly posts: Posts[] = [];

  async getPosts(): Promise<Posts[]> {
    console.log(posts);
    return posts;
  }

  async getPost(id: number): Promise<Posts | undefined> {
    return posts[id - 1];
  }

  async createPost(data: Posts): Promise<Posts> {
    posts.push(data);
    return data;
  }

  async updatePosts(data: Posts): Promise<Posts> {
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
      posts.splice(id, id);
      return posts;
    } else throw new Error('Post not found');
  }

  async findAll(): Promise<Posts[]> {
    return this.posts;
  }

  findByIndex(index: number): Posts | null {
    console.assert(
      typeof this.posts[index] !== 'undefined',
      '[findByIndex] Invalid',
    );
    if (typeof this.posts[index] !== 'undefined') {
      return this.posts[index];
    }

    return null;
  }
}
