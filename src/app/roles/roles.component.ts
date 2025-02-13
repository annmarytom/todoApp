import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  //variable declaration
  firstName: string ="Ann";
  secondName: string ="mary";
  lastName:string ="tom";
  age: number=18;
  isActive:boolean=true;
  currentDate:Date=new Date();
   
}
