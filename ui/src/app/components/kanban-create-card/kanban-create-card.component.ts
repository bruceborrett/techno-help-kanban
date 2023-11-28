import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanCard } from '../kanban-card/kanban-card.component';

import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { KanbanService } from '../../services/kanban.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-kanban-create-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './kanban-create-card.component.html',
  styleUrl: './kanban-create-card.component.css',
})
export class KanbanCreateCardComponent {

  constructor(private kanbanService: KanbanService, private userService: UserService) { }

  @Input() projectId!: number;
  @Input() defaultLaneId!: number;
  @Output() submitDone: EventEmitter<void> = new EventEmitter<void>();

  form = new FormGroup({
    title: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    description: new FormControl('', {nonNullable: true}),
    dueDate: new FormControl('', {nonNullable: true}),
    startDate: new FormControl('', {nonNullable: true}),
    assigneeId: new FormControl(0, { nonNullable: true }),
    projectId: new FormControl(this.projectId, { nonNullable: true }),
    laneId: new FormControl(this.defaultLaneId, { nonNullable: true }),
    order: new FormControl(0, { nonNullable: true }),
    tags: new FormArray([]),
  });

  users = this.userService.users();

  tags() {
    return this.form.get('tags') as FormArray;
  }

  addTag(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const text = (event.target as HTMLInputElement).value;
      if (text) {
        this.tags().push(new FormControl(text, { nonNullable: true }));
        (event.target as HTMLInputElement).value = '';
      }
    }
  }

  removeTag(index: number) {
    this.tags().removeAt(index);
  }

  submit() {
    const card: Omit<KanbanCard, 'id'> = this.form.getRawValue()
    card.projectId = this.projectId;
    card.laneId = this.defaultLaneId;
    this.kanbanService.createCard(card).subscribe(() => {
      this.submitDone.emit();
    });
  }

}
