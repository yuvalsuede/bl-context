import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../common/base.component";
import {UserBl} from "./users-bl.service";

@Component({
    selector: 'users',
    template:`
      <div class="users-list">
        <div class="user" *ngFor="let user of users" (click)="selectUser(user)">
          {{ user.name }} | {{ user.id }}
        </div>
      </div>
    `,
  styles: [`
    .users-list {
        margin: 20px 5px;
        padding: 10px;
    }
    .user {
     padding: 10px;
      margin: 5px 0;
      background-color: #efefef;
      border-radius: 3px;
      clear: both;
      float: left;
      cursor: pointer;
    }
`]
})
export class UsersComponent extends BaseComponent{

  // binding to userBl
  get users(){ return this.userBl.users; }
  selectUser(user) { this.userBl.selectUser(user)}

  constructor(private userBl:UserBl) {
    super();
  }

  ngOnInit() {
    // can be called by any other triggered action
    this.userBl.loadUsers();
  }

}
