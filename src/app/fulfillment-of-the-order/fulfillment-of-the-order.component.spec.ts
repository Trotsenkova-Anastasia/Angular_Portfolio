import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillmentOfTheOrderComponent } from './fulfillment-of-the-order.component';

describe('FulfillmentOfTheOrderComponent', () => {
  let component: FulfillmentOfTheOrderComponent;
  let fixture: ComponentFixture<FulfillmentOfTheOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FulfillmentOfTheOrderComponent]
    });
    fixture = TestBed.createComponent(FulfillmentOfTheOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
