import { Component } from '@angular/core';
import { FulfillmentOfTheOrder } from './fulfillment-of-the-order-list';

@Component({
  selector: 'app-fulfillment-of-the-order',
  templateUrl: './fulfillment-of-the-order.component.html',
  styleUrls: ['./fulfillment-of-the-order.component.css']
})
export class FulfillmentOfTheOrderComponent {

  
  FulfillmentOfTheOrder: FulfillmentOfTheOrder[] = 
  [   {id:1, name: 'Артур',name_client:'John', text: "Звісно, John! Ваше замовлення на картину 'Сад художника у Вітеї' прийнято. Зв'яжемось з вами найближчим часом для уточнень." },
  {id:2, name: 'Марина',name_client:'Mary', text: "Дякую за ваше замовлення картини 'Кувшинки'. Ми обробимо його якнайшвидше і повідомимо вам про подальші дії." },
  {id:3, name: 'Дмитро',name_client:'David', text: "Замовлення на картину 'Соняшники' отримано. Ми зв'яжемось з вами для підтвердження деталей." },
  {id:4, name: 'Ольга',name_client:'Sarah', text: "Дякуємо за ваш вибір! Ваше замовлення на картину 'Садова доріжка' зареєстровано. Очікуйте нашого дзвінка." },
  {id:5, name: 'Валентин',name_client:'Michael', text: "Ваше замовлення на картину 'Затока на Сені поблизу Аржантея' успішно прийнято. Ми з вами зв'яжемось." },
  {id:6, name: 'Людмила',name_client:'Emily', text: "Ми раді, що вам сподобалася картина 'Стога'. Замовлення прийнято і буде оброблено найближчим часом." },
  {id:7, name: 'Аркадій',name_client:'Daniel', text: "Додали картину 'Сад художника у Вітеї' до вашого замовлення. Зв'яжемось для підтвердження. "},
  {id:8, name: 'Ірина',name_client:'Olivia', text: "Ваше замовлення на картину 'Соняшники' отримано. Ми з вами зв'яжемось для подальших кроків." },
  {id:9, name: 'Андрій',name_client:'William', text: "Картину 'Садова доріжка' додано до вашого замовлення. Зачекайте нашого дзвінка для уточнень." },
  {id:10, name: 'Марія',name_client:'Sophia', text: "Дякуємо за ваш вибір! Ваше замовлення на картину 'Кувшинки' прийнято. Зв'яжемось з вами найближчим часом." }];
}
