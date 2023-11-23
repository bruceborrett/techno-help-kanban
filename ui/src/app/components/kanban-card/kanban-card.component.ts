import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule, DragEndEvent } from 'angular-draggable-droppable';
import { AvatarComponent } from '../avatar/avatar.component';

export interface KanbanCard {
  id: number;
  title: string;
  laneId: number;
}

@Component({
  selector: 'app-kanban-card',
  standalone: true,
  imports: [CommonModule, DragAndDropModule, AvatarComponent],
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
