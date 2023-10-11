import { Component, OnInit } from '@angular/core';
import { MyTestItem } from '../my-test-item';

@Component({
  selector: 'app-my-test-component',
  templateUrl: './my-test-component.component.html',
  styleUrls: ['./my-test-component.component.css']
})
export class MyTestComponentComponent implements OnInit {
  title="MyTestComponentComponent"
  myTestItems:MyTestItem=
  {
    id:1,
    name:"ToDo",
    isComplete:false
  }
 
  constructor (){}
    ngOnInit()
    {

    }
}
