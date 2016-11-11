import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { User }                from './user';
import { UserService }         from './user.service';


@Component({
  selector: 'route-leader',
  templateUrl: '/templates/app.component.html'
})

export class AppComponent {

  users: User[];

  constructor(private userService: UserService) { }

  selectedUser: User;
  
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}

