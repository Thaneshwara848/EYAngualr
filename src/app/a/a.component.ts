import { Component } from '@angular/core';
import { MycommonservService } from '../mycommonserv.service';

@Component({
  selector: 'app-a',
  standalone: false,
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
constructor(private cd:MycommonservService){
}
  acomp(){
  //  console.log("100 lines A component ")
    this.cd.coommndata();
}
}
