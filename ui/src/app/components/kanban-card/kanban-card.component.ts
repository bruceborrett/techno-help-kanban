import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule, DragEndEvent } from 'angular-draggable-droppable';
import { AvatarComponent } from '../avatar/avatar.component';
import { TagComponent } from '../tag/tag.component';

export interface KanbanCard {
  id: number;
  title: string;
  laneId: number;
  projectId: number;
  assigneeId: number;
  description: string;
  dueDate: string;
  startDate: string;
  tags: string[];
  order: number;
}

@Component({
  selector: 'app-kanban-card',
  standalone: true,
  imports: [CommonModule, DragAndDropModule, AvatarComponent, TagComponent],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.css'
})
export class KanbanCardComponent {
  @Input() card!: KanbanCard;
  @Input() borderColor!: string;

  dragEnd(ev: DragEndEvent) {
    console.log(ev)
  }
}
