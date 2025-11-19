import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  standalone: false,
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent {

  name="Thanesh";
  abc(){
    console.log("HI you clicked ")
  }

  xyz(uname:string){
    console.log("Hi my name is :"+uname);
    this.name=uname;
  }
}
