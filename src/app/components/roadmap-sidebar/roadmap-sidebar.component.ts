import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap-sidebar',
  templateUrl: './roadmap-sidebar.component.html',
  styleUrls: ['./roadmap-sidebar.component.css'],
})
export class RoadmapSidebarComponent {
  list = [
    { key: 'Planned', value: 0 },
    { key: 'In-Progress', value: 0 },
    { key: 'Live', value: 0 },
  ];
}
