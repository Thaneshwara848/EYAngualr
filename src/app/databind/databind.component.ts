import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  standalone: false,
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent {
  company="IBM";
 abc(){
  console.log("Hi Abc function")
 }

 name="";
 xyz(uname:string){
  console.log("My name is :"+uname)
  this.name=uname;
 }

 total=0;
 emi=0;
 cal(p:any,r:any,t:any){
  console.log(p +": "+r +" :"+t)
  this.total=(p *t *r)/100;
  this.emi=this.total/t;
 }
  intrest = 0;
loanType(value: any) {
  console.log(value);
  if (value == "car") this.intrest = 8;
  else if (value == "edu") this.intrest = 10;
  else if (value == "per") this.intrest = 14;
  else if (value == "home") this.intrest = 11;
}
}
