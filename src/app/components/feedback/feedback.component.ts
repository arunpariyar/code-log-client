import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  @Input('info') feedback!: any;

  constructor(private router: Router) {}
  handleClick() {
    this.router.navigate(['/feedback', this.feedback.id]);
  }
  randonNum() {
    return Math.floor(Math.random() * 10);
  }
}
