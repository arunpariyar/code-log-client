import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appstate';
import { Feedback } from 'src/app/models/feedback';
import { allStatusArray } from 'src/app/store/feedback.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roadmap-sidebar',
  templateUrl: './roadmap-sidebar.component.html',
  styleUrls: ['./roadmap-sidebar.component.css'],
})
export class RoadmapSidebarComponent {
  list = [
    { key: 'Planned', value: 0, color: '#f49f85' },
    { key: 'InProgress', value: 0, color: '#ad2fea' },
    { key: 'Live', value: 0, color: '#62bcfa' },
  ];

  planned$!: Observable<Number>;

  constructor(private store: Store<AppState>) {
    this.store.select(allStatusArray).subscribe((items) => (this.list = items));
  }
}
