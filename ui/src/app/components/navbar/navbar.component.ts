import { Component, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';
import { ProjectSelectorComponent } from '../project-selector/project-selector.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AvatarComponent, ProjectSelectorComponent, NgIconComponent, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  viewProviders: [provideIcons({ heroArrowLeft })]
})
export class NavbarComponent {
  constructor(private users: UserService) { }

  currentUser = this.users.currentUser();
}
