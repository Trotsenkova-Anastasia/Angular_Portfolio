import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { OrdersComponent } from './orders/orders.component';
import { FulfillmentOfTheOrderComponent } from './fulfillment-of-the-order/fulfillment-of-the-order.component';
import { InfComponent } from './inf/inf.component';

const routes: Routes = [{
  path:'',component:PortfolioComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'contact',component:ContactComponent},
  {path:'orders',component:OrdersComponent},
  {path:'fulfillment-of-the-order',component:FulfillmentOfTheOrderComponent},
  {path:'inf',component:InfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
