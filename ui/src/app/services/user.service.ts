import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  currentUser() {
    return {
      id: 1,
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?img=14'
    }
  }

  users() {
    return [
      {
        id: 1,
        name: 'John Doe',
        avatarUrl: 'https://i.pravatar.cc/150?img=14'
      },
      {
        id: 2,
        name: 'Jane Doe',
        avatarUrl: 'https://i.pravatar.cc/150?img=15'
      },
      {
        id: 3,
        name: 'Joe Doe',
        avatarUrl: 'https://i.pravatar.cc/150?img=16'
      },
      {
        id: 4,
        name: 'Jill Doe',
        avatarUrl: 'https://i.pravatar.cc/150?img=17'
      },
    ]
  }
}

