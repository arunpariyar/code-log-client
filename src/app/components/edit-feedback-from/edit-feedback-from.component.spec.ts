import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeedbackFromComponent } from './edit-feedback-from.component';

describe('EditFeedbackFromComponent', () => {
  let component: EditFeedbackFromComponent;
  let fixture: ComponentFixture<EditFeedbackFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFeedbackFromComponent]
    });
    fixture = TestBed.createComponent(EditFeedbackFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
