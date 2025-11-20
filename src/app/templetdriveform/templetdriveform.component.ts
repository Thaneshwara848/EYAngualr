import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templetdriveform',
  standalone: false,
  templateUrl: './templetdriveform.component.html',
  styleUrl: './templetdriveform.component.css'
})
export class TempletdriveformComponent {
  myInfo(userForm:any){
      console.log(userForm)
  }
}
