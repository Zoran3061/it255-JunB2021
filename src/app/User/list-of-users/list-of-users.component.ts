import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  public users: User[] = [];

  constructor(private UserService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.UserService.getAll().subscribe((res) => {
      this.users = res;
    })
    console.log(this.users);
  }

}
