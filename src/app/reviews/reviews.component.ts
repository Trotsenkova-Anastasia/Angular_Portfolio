import { Component } from '@angular/core';
import { ReviewsList } from '../reviews-list';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  ReviewsList: ReviewsList[] = 
  [   {id:1, name: "Анна", rating: 5, text: "Чудовий сайт з чудовими картинами Клода Моне. Вражаюча колекція!" },
  {id:2, name: "Петро", rating: 4, text: "Дуже якісні зображення, але ціни можуть бути трохи нижчі." },
  {id:3, name: "Ірина", rating: 5, text: "Найкраще місце для підбору картин в стилі Моне. Дуже доступно і зручно." },
  {id:4, name: "Олександра", rating: 3, text: "Співвідношення ціни і якості залишає бажати кращого." },
  {id:5, name: "Михайло", rating: 5, text: "Велика колекція картин і швидкий доступ до них. Дякую!" },
  {id:6, name: "Оксана", rating: 4, text: "Деякі зображення завантажувалися трохи повільно, але все відмінно." },
  {id:7, name: "Віталій", rating: 5, text: "Сайт просто на вищому рівні. Відмінний інтерфейс і якість картин." },
  {id:8, name: "Наталія", rating: 3, text: "Деякі зображення не відповідають кольорам, але загалом непогано." },
  {id:9, name: "Юрій", rating: 4, text: "Зручний сайт для пошуку картин, але можливості отримати знижку були б вдячні." },
  {id:10, name: "Віктор", rating: 5, text: "Висока якість картин і оперативна підтримка клієнтів. Дуже вдячний!" }];
}
