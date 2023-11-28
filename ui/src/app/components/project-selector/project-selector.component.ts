import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { KanbanService } from '../../services/kanban.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-selector',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './project-selector.component.html',
  styleUrl: './project-selector.component.css'
})
export class ProjectSelectorComponent {
  constructor(private kanbanService: KanbanService, private router: Router) { }

  projects = this.kanbanService.projects();

  changeProject(event: Event) {
    const projectId = (event.target as HTMLSelectElement).value;
    this.router.navigate([`/project/${projectId}`]);
  }
}
