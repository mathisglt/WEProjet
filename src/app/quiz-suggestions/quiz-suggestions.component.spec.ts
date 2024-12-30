import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSuggestionsComponent } from './quiz-suggestions.component';

describe('QuizSuggestionsComponent', () => {
  let component: QuizSuggestionsComponent;
  let fixture: ComponentFixture<QuizSuggestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizSuggestionsComponent]
    });
    fixture = TestBed.createComponent(QuizSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
