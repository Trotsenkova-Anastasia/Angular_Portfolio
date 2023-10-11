import { Component } from '@angular/core';
import { OrdersList } from './orders-list';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  OrdersList: OrdersList[] = 
  [  
    {id:1, name: 'John', text: 'Будь ласка, замовте картину "Сад художника у Вітеї".',src:"assets/1.jpeg" },
  {id:2, name: 'Mary', text: 'Я б хотіла замовити картину "Кувшинки".',src:"assets/2.jpg" },
  {id:3, name: 'David', text: 'Чи можна замовити картину "Соняшники"?',src:"assets/3.jpg" },
  {id:4, name: 'Sarah', text: 'Мені сподобалася картину "Садова доріжка". Можливо, я можу її замовити?',src:"assets/4.jpg" },
  {id:5,name: 'Michael', text: 'Замовлення на картину "Затока на Сені поблизу Аржантея", будь ласка.',src:"assets/7.jpg" },
  {id:6, name: 'Emily', text: 'Я б хотіла замовити картину "Стога". Як я можу це зробити?',src:"assets/6.jpg" },
  {id:7, name: 'Daniel', text: 'Будь ласка, додайте до мого замовлення картину "Сад художника у Вітеї".' ,src:"assets/1.jpeg"},
  {id:8,name: 'Olivia', text: 'Мені цікава картина "Соняшники". Чи можна її замовити?' ,src:"assets/3.jpg"},
  {id:9, name: 'William', text: 'Чи можна додати до мого замовлення картину "Садова доріжка"?',src:"assets/4.jpg" },
  {id:10, name: 'Sophia', text: 'Будь ласка, замовте картину "Кувшинки".',src:"assets/2.jpg" }
  ];
}
