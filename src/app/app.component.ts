import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app'
  name="Anastasiia"
  age=19
  city="Хмельницький"
  birthday="02.03.04"
  transport:string ="";
  changeTransport(transport:string)
    {
      this.transport=transport;
    }
  getTitle()
  {
    return this.title
  }
}
