import { Injectable } from '@nestjs/common';
import { CreateKanbanBoardDto } from './dto/create-kanban-board.dto';
import { UpdateKanbanBoardDto } from './dto/update-kanban-board.dto';

@Injectable()
export class KanbanBoardService {
  create(createKanbanBoardDto: CreateKanbanBoardDto) {
    return 'This action adds a new kanbanBoard';
  }

  findAll() {
    return `This action returns all kanbanBoard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kanbanBoard`;
  }

  update(id: number, updateKanbanBoardDto: UpdateKanbanBoardDto) {
    return `This action updates a #${id} kanbanBoard`;
  }

  remove(id: number) {
    return `This action removes a #${id} kanbanBoard`;
  }
}
