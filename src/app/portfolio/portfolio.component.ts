import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
Show1(ev:any):void
  {
    console.log(ev.target);
    console.log(ev.target.value);
    console.log(ev.keyCode);
  }
Show2(ev:any):void
  {
    console.log(ev.target);
    console.log(ev.target.value);
    console.log(ev.keyCode);
  }
}
