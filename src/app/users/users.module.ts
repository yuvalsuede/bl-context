import { NgModule } from '@angular/core';
import {UserBl} from "./users-bl.service";
import {UsersComponent} from "./users.component";
import {RouterModule} from "@angular/router";
import {AppContext} from "../common/app-context.service";
import {SharedModule} from "../common/shared.module";
import {UsersAsyncService} from "./users-async.service";


@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild([
        { path: '' , component: UsersComponent}
      ])
    ],
    exports: [],
    declarations: [
      UsersComponent
    ],
    providers: [
      UserBl,
      UsersAsyncService
    ],
})
export class UsersModule {

  constructor(
    private appContext:AppContext,
    private usersBl:UserBl
  ){
    appContext.usersBl = usersBl;
  }


}
