import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  dataName: string = " applicaton form is used to fill the personal details of sales employees";
  PersonName: string = "ann";
  dataNumber: number = 23;
  isData: boolean = true;
  inputData: string = "ann";

  showSubmit() {
    alert("Application submitted successfully..!")
  }
  showCancelBtnClick(message:string){
    window.alert(message);
  }
}