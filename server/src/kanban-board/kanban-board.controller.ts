import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KanbanBoardService } from './kanban-board.service';
import { CreateKanbanBoardDto } from './dto/create-kanban-board.dto';
import { UpdateKanbanBoardDto } from './dto/update-kanban-board.dto';

@Controller('kanban-board')
export class KanbanBoardController {
  constructor(private readonly kanbanBoardService: KanbanBoardService) {}

  @Post()
  create(@Body() createKanbanBoardDto: CreateKanbanBoardDto) {
    return this.kanbanBoardService.create(createKanbanBoardDto);
  }

  @Get()
  findAll() {
    return this.kanbanBoardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kanbanBoardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKanbanBoardDto: UpdateKanbanBoardDto) {
    return this.kanbanBoardService.update(+id, updateKanbanBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kanbanBoardService.remove(+id);
  }
}
