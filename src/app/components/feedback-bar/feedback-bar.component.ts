import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { Observable } from 'rxjs';
import { selectFeedback } from 'src/app/store/feedback.selector';

@Component({
  selector: 'app-feedback-bar',
  templateUrl: './feedback-bar.component.html',
  styleUrls: ['./feedback-bar.component.css'],
})
export class FeedbackBarComponent {
  private store = inject(Store);
  feedbacks$: Observable<Feedback[]> = this.store.select(selectFeedback);

  constructor(private router: Router) {}
  navigateToForm() {
    this.router.navigate(['/feedback']);
  }
}
