import { PartialType } from '@nestjs/mapped-types';
import { CreateKanbanCardDto } from './create-kanban-card.dto';

export class UpdateKanbanCardDto extends PartialType(CreateKanbanCardDto) {}
