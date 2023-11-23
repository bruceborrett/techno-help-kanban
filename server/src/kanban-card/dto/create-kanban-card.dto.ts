export class CreateKanbanCardDto {
  title: string;
  projectId: number;
  laneId: number;
  description: string;
  order: number;
  startDate: Date;
  dueDate: Date;
  assignee: string;
}
