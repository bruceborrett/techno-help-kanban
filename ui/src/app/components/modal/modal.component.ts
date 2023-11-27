import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroXMark } from '@ng-icons/heroicons/outline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  viewProviders: [
    provideIcons({ heroXMark })
  ],
})
export class ModalComponent {
  constructor() { }

  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  show() {
    this.dialog.nativeElement.showModal();
  }

  close() {
    this.dialog.nativeElement.close();
  }
}
