import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { SalesComponent } from './sales/sales.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
//import { SalesComponent } from './sales/sales.component';

@Component({
  selector: 'app-root',
  imports: [RolesComponent,SalesComponent,DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoApp';
}
