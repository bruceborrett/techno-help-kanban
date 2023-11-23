import { PartialType } from '@nestjs/mapped-types';
import { CreateKanbanLaneDto } from './create-kanban-lane.dto';

export class UpdateKanbanLaneDto extends PartialType(CreateKanbanLaneDto) {}
