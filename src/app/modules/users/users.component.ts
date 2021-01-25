import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private user:UserService) { }
  UserList:any = [];

  ngOnInit(): void {
    this.refreshUserList();
  }
 refreshUserList(){
   this.user.getUserList().subscribe((data:any)=>{
     this.UserList=data;
   })
 }
}
