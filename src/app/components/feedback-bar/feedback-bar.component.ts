import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { Observable } from 'rxjs';
import { selectFeedback } from 'src/app/store/feedback.selector';
import { setFilter } from 'src/app/store/feedback.actions';

@Component({
  selector: 'app-feedback-bar',
  templateUrl: './feedback-bar.component.html',
  styleUrls: ['./feedback-bar.component.css'],
})
export class FeedbackBarComponent {
  sortOptions = [
    'Most Upvotes',
    'Least Upvotes',
    //TODO - these will be updated when the feature is made in the server code
    // 'Most Comments',
    // 'Least Comments',
  ];

  private store = inject(Store);
  feedbacks$: Observable<Feedback[]> = this.store.select(selectFeedback);

  constructor(private router: Router) {}
  navigateToForm() {
    this.router.navigate(['/feedback']);
  }

  sortByOption(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const sortOption = selectedValue.replace(' ', '_').toUpperCase();
    this.store.dispatch(setFilter({ filter: sortOption }));
  }
}
