import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Feedback } from 'src/app/models/feedback';
import { init } from 'src/app/store/feedback.actions';
import { selectFeedback } from 'src/app/store/feedback.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allCatagories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

  feedbacks$: Observable<Feedback[]> | undefined;

  constructor(private store: Store<{ feedback: Feedback[] }>) {
    this.feedbacks$ = store.select(selectFeedback);
  }

  ngOnInit(): void {
    this.store.dispatch(init());
  }
}
