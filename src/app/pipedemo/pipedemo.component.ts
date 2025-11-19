import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  standalone: false,
  templateUrl: './pipedemo.component.html',
  styleUrl: './pipedemo.component.css'
})
export class PipedemoComponent {

  name ="ThaneSH is a jAVa a  triner ";
  amount=123456789;
  date = new Date();
  obj={id:100,'Name':'Thanesh'}

}
