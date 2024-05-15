import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Feedback } from 'src/app/model/feedback';
import { selectFeedback } from 'src/app/store/feedback.selector';
import { Observable, filter, first, map } from 'rxjs';
import { init } from 'src/app/store/feedback.actions';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css'],
})
export class FeedbackDetailsComponent implements OnInit {
  allFeedbacks$!: Observable<Feedback[]>;
  currentFeedback!: Feedback;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ feedback: Feedback[] }>
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFeedbacks(this.id);
  }

  getFeedbacks(id: string): void {
    this.store.dispatch(init());
    this.allFeedbacks$ = this.store.select(selectFeedback);

    //using rxjs operator
    this.allFeedbacks$
      .pipe(map((data) => data.filter((result) => result.id === this.id)))
      .subscribe((data) => (this.currentFeedback = data[0]));

    // this.allFeedbacks$.subscribe((data) => {
    //   this.currentFeedback = data.find((feedback) => feedback.id === this.id)!;
    // });
  }
}
