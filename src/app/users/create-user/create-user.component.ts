import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UserService } from '../usersuser.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }
  response!: ResponseCreate;
  
  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
  }

  submit(){
    this.userService.createUsers(this.request).subscribe( res =>{
      this.response = res
    });
  }
}
