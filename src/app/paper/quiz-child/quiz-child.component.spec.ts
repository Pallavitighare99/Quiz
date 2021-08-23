import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizChildComponent } from './quiz-child.component';

describe('QuizChildComponent', () => {
  let component: QuizChildComponent;
  let fixture: ComponentFixture<QuizChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
