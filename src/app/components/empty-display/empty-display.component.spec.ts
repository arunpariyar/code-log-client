import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyDisplayComponent } from './empty-display.component';

describe('EmptyDisplayComponent', () => {
  let component: EmptyDisplayComponent;
  let fixture: ComponentFixture<EmptyDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyDisplayComponent]
    });
    fixture = TestBed.createComponent(EmptyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
