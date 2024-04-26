import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/model/feedback';
import { selectFeedback } from 'src/app/store/feedback.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  allCatagories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

  feedbacks$?: Observable<Feedback[]>;

  constructor(private store: Store<{ feedback: Feedback[] }>) {
    this.feedbacks$ = store.select(selectFeedback);
  }
}
