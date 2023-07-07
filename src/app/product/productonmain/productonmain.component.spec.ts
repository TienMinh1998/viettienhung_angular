import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductonmainComponent } from './productonmain.component';

describe('ProductonmainComponent', () => {
  let component: ProductonmainComponent;
  let fixture: ComponentFixture<ProductonmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductonmainComponent]
    });
    fixture = TestBed.createComponent(ProductonmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
