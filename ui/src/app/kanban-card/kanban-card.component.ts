import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule, DragEndEvent } from 'angular-draggable-droppable';

export interface KanbanCard {
  id: number;
  title: string;
  lane: number;
}

@Component({
  selector: 'app-kanban-card',
  standalone: true,
  imports: [CommonModule, DragAndDropModule],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.css'
})
export class KanbanCardComponent {
  @Input() card!: KanbanCard;
  @Input() borderClass!: string;

  dragEnd(ev: DragEndEvent) {
    console.log(ev)
  }
}
