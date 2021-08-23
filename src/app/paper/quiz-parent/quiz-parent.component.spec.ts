import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizParentComponent } from './quiz-parent.component';

describe('QuizParentComponent', () => {
  let component: QuizParentComponent;
  let fixture: ComponentFixture<QuizParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
