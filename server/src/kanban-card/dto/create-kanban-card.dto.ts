export class CreateKanbanCardDto {
  title: string;
  lane: number;
  description: string;
  order: number;
  startDate: Date;
  dueDate: Date;
  assignee: string;
}
