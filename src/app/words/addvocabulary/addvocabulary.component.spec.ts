import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddvocabularyComponent } from './addvocabulary.component';


describe('AddvocabularyComponent', () => {
  let component: AddvocabularyComponent;
  let fixture: ComponentFixture<AddvocabularyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvocabularyComponent]
    });
    fixture = TestBed.createComponent(AddvocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
