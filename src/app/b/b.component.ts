import { Component } from '@angular/core';
import { MycommonservService } from '../mycommonserv.service';

@Component({
  selector: 'app-b',
  standalone: false,
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  constructor(private cd:MycommonservService){
  }
  bcomp(){
    //console.log("100 lins in B comp")
    this.cd.coommndata();
  }
}
