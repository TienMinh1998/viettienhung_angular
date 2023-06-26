import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardOverviewComponent } from './dasboard-overview.component';

describe('DasboardOverviewComponent', () => {
  let component: DasboardOverviewComponent;
  let fixture: ComponentFixture<DasboardOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasboardOverviewComponent]
    });
    fixture = TestBed.createComponent(DasboardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
