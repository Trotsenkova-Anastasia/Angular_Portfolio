import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { OrdersComponent } from './orders/orders.component';
import { FulfillmentOfTheOrderComponent } from './fulfillment-of-the-order/fulfillment-of-the-order.component';
import { InfComponent } from './inf/inf.component';
@NgModule({
  declarations: [
    AppComponent,
    MyTestComponentComponent,
    PipesTestComponent,
    ToDoItemsComponent,
    PortfolioComponent,
    AboutComponent,
    GalleryComponent,
    FooterComponent,
    NavComponent,
    ReviewsComponent,
    ContactComponent,
    OrdersComponent,
    FulfillmentOfTheOrderComponent,
    InfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
  
}
