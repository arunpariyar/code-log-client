import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoterBtnComponent } from './upvoter-btn.component';

describe('UpvoterBtnComponent', () => {
  let component: UpvoterBtnComponent;
  let fixture: ComponentFixture<UpvoterBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpvoterBtnComponent]
    });
    fixture = TestBed.createComponent(UpvoterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
