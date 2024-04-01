import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  allCatagories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  feedbacks = [
    {
      title: 'Add tags for solutions',
      summary: 'Easier to search for solutions based on a specific task',
      upvote: 112,
      comments: 2,
      category: 'Enhancement',
    },
    {
      title: 'Add a dark theme option',
      summary:
        'It would help people with light senstivities who prefer dark mode',
      upvote: 99,
      comments: 4,
      category: 'Feature',
    },
  ];
}
