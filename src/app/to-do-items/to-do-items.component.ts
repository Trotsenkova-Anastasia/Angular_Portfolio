import { Component, OnInit } from '@angular/core';
import { ToDoItems } from '../to-do-items';
import { ITEMS } from '../mock-todo-items';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit{
  title="ToDoItems"
  todoitems:ToDoItems[]=ITEMS
  selectedItem: ToDoItems|undefined;

  onSelect(item:ToDoItems):void
 {
    this.selectedItem=item;
 }


  constructor ()
  {
    
  }
    ngOnInit()
    {

    }
}
