import { KanbanCardService } from './kanban-card.service';
import { CreateKanbanCardDto } from './dto/create-kanban-card.dto';
import { UpdateKanbanCardDto } from './dto/update-kanban-card.dto';

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('kanban-card')
export class KanbanCardController {
  constructor(private readonly kanbanCardService: KanbanCardService) {}

  @Post()
  create(@Body() createKanbanCardDto: CreateKanbanCardDto) {
    return this.kanbanCardService.create(createKanbanCardDto);
  }

  @Get()
  findAll() {
    return this.kanbanCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kanbanCardService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKanbanCardDto: UpdateKanbanCardDto,
  ) {
    return this.kanbanCardService.update(+id, updateKanbanCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kanbanCardService.remove(+id);
  }
}
