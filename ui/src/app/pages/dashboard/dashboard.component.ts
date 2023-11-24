import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanService } from '../../services/kanban.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private kanbanService: KanbanService) { }

  projects = this.kanbanService.projects();
}
