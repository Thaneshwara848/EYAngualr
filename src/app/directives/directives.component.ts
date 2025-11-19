import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  abc=true;

  emp=["Arun","Bindu","Sindu","Chandu"];
  // employees(){
  //   for(let i = 0;i<this.emp.length;i++){
  //     console.log(this.emp[i]);
  //   }
  // }

fruits = ["Apple","Banana","Cheery"];

  addFruid(fruit:any){
    console.log(fruit)
    this.fruits.push(fruit);
  }

   selectedColor = '';
}
