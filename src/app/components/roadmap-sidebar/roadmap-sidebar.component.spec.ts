import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapSidebarComponent } from './roadmap-sidebar.component';

describe('RoadmapSidebarComponent', () => {
  let component: RoadmapSidebarComponent;
  let fixture: ComponentFixture<RoadmapSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadmapSidebarComponent]
    });
    fixture = TestBed.createComponent(RoadmapSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
