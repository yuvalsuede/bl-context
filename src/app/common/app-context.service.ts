import { Injectable } from '@angular/core';

@Injectable()
export class AppContext {

  usersBl: any;

  get currentUser() {

    if (!this.usersBl) return null;

    return this.usersBl.currentUser;

  }

}
