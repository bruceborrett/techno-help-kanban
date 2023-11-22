import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KanbanBoardModule } from './kanban-board/kanban-board.module';

@Module({
  imports: [KanbanBoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
