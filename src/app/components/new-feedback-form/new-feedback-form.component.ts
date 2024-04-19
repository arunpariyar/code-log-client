import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-feedback-form',
  templateUrl: './new-feedback-form.component.html',
  styleUrls: ['./new-feedback-form.component.css'],
})
export class NewFeedbackFormComponent {
  feedbackForm!: FormGroup;
  categories = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  constructor(private router: Router, private formBuilders: FormBuilder) {
    this.feedbackForm = this.formBuilders.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      details: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
    }
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
