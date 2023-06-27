import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertopComponent } from './headertop.component';

describe('HeadertopComponent', () => {
  let component: HeadertopComponent;
  let fixture: ComponentFixture<HeadertopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadertopComponent]
    });
    fixture = TestBed.createComponent(HeadertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
