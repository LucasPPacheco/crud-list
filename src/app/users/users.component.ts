import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResponseUsers } from './user.model';
import { UserService } from './usersuser.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

responseUsers!: ResponseUsers;

  constructor(private userService :UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( res =>{
      this.responseUsers = res;
      console.log(this.responseUsers)
    })
    
  }

 
}
