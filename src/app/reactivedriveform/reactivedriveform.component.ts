import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivedriveform',
  standalone: false,
  templateUrl: './reactivedriveform.component.html',
  styleUrl: './reactivedriveform.component.css'
})
export class ReactivedriveformComponent implements OnInit{
  student:any;
  myinfo(userinfo:any){
    console.log(userinfo)
  }
  ngOnInit(): void {

   this.student=new FormGroup({
    
    firstname:new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('^[a-zA-Z]*$')

    ])),

    lastname:new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ])),

    age:new FormControl("",Validators.compose([
      Validators.required,
      Validators.min(18),
      Validators.max(60)
    ])),

   })
  }
}