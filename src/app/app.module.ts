import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppContext} from "./common/app-context.service";
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CoreModule} from "./common/core.module";
import {UsersModule} from "./users/users.module";


const appRoutes : Route[] = [
  { path: 'home' , component: HomeComponent },
  { path: 'users' , loadChildren: () => UsersModule  },
  { path: '**' , redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CoreModule.forRoot(),

    // our modules
    UsersModule
  ],
  providers: [
    AppContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
