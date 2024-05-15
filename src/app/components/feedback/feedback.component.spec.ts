import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { mockFeedbacks } from 'src/test-data/mock-feedbacks';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render with values', () => {
    component.feedback = mockFeedbacks[0];
    //this most come after as the feedback provided above
    fixture.detectChanges();

    const container = el.queryAll(By.css('.feedback-container'));
    expect(container.length).withContext('should only be one').toBe(1);
    const title = el.query(By.css('.feedback-title'));
    expect(title.nativeElement.textContent).toBe(mockFeedbacks[0].title);
    const detail = el.query(By.css('.feedback-summary'));
    expect(detail.nativeElement.textContent).toBe(mockFeedbacks[0].detail);
  });
});
