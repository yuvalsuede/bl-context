import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../common/base.component";
import {AppContext} from "../common/app-context.service";

@Component({
    selector: 'home',
    template:`
      <h1>Home Component</h1>
      <div>username: {{ user?.name }}</div>
    `
})
export class HomeComponent extends BaseComponent {

  user:any;

  constructor(private context:AppContext) {
      super();
      this.user = context.currentUser;

    }

    ngOnInit() { }

}
