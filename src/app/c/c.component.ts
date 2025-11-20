import { Component } from '@angular/core';
import { MycommonservService } from '../mycommonserv.service';

@Component({
  selector: 'app-c',
  standalone: false,
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class CComponent {
  
  constructor(private cd:MycommonservService){
  }

  ccomp(){
  //  console.log("100 lines A component ")
     this.cd.coommndata();
  }
}
