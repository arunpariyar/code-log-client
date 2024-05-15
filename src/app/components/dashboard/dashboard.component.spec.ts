import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DebugElement } from '@angular/core';
import { AppModule } from 'src/app/app.module';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      // declarations: [DashboardComponent],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    // fixture.detectChanges();
  });

  it('should create dashboard', () => {
    expect(component).toBeTruthy();
  });
});
