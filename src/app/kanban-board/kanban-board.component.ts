import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroSquares2x2, heroListBullet, heroPlus } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css',
  viewProviders: [provideIcons({ heroSquares2x2, heroListBullet, heroPlus })]
})
export class KanbanBoardComponent {

}
