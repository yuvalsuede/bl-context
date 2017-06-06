import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <nav>
      <a routerLink="/home"  routerLinkActive="active">Home</a>
      <a routerLink="/users" routerLinkActive="active">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    a {
      padding: 5px 10px;
      background: #8ac8fa;
      margin:5px;
      text-decoration: none;
    }
    a:hover {
      cursor: pointer;
      
    }
    a.active {
      background: #000;
      color:white;
    }

  `]
})
export class AppComponent {

}
