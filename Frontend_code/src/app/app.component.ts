import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-app';
  faCoffee = faCoffee;
//   constructor(private router:Router){}
//   login(){
// this.router.navigate(['/login']);
//   }
}
