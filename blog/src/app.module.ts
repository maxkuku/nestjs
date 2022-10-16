import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './news/posts.module';
import { CalcModule } from './calc/calc.module';

@Module({
  imports: [PostsModule, CalcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
