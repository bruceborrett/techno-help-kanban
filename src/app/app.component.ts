import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { KanbanBoard, KanbanBoardComponent } from './kanban-board/kanban-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    KanbanBoardComponent,
  ],
})
export class AppComponent {
  project: KanbanBoard = {
    id: 1,
    title: 'Leads',
    lanes: [
      {
        id: 1,
        title: 'Drafts',
        borderClass: 'border-sky-700',
      }, {
        id: 2,
        title: 'Planned',
        borderClass: 'border-purple-500',
      }, {
        id: 3,
        title: 'Designing',
        borderClass: 'border-green-400',
      }, {
        id: 4,
        title: 'In Dev',
        borderClass: 'border-sky-300',
      }, {
        id: 5,
        title: 'QA',
        borderClass: 'border-amber-500',
      }
    ],
    cards: [
      {
        id: 1,
        title: 'Experiment 1',
        lane: 1,
      }, {
        id: 2,
        title: 'Experiment 2',
        lane: 2,
      }, {
        id: 3,
        title: 'Experiment 3',
        lane: 1,
      }
    ]
  }
}
