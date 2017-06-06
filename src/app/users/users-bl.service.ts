import { Injectable } from '@angular/core';
import {UsersAsyncService} from "./users-async.service";

@Injectable()
export class UserBl {

    users:any[] = [];
    currentUser:any;

    constructor(private usersAsyncService: UsersAsyncService) {

    }

    loadUsers() {
      // replace with UsersAsyncService
      this.users = [
        {
          name: 'Yuval',
          id: 1
        },
        {
          name: 'Moshe',
          id: 2
        }
      ];
    }

    selectUser(user:any) {
      this.currentUser = user;
    }

}
