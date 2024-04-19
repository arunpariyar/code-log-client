import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-bar',
  templateUrl: './feedback-bar.component.html',
  styleUrls: ['./feedback-bar.component.css'],
})
export class FeedbackBarComponent {
  noOfSgs = 6;

  constructor(private router: Router) {}
  navigateToForm() {
    this.router.navigate(['/feedback']);
  }
}
