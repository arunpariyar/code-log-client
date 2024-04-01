import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  feedback = {
    title: 'Add tags for solutions',
    summary: 'Easier to search for solutions based on a specific task',
    upvote: 112,
    comments: 2,
    category: 'Enhancement',
  };
}
