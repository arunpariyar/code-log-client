import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { addFeedback } from 'src/app/store/feedback.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-new-feedback-form',
  templateUrl: './new-feedback-form.component.html',
  styleUrls: ['./new-feedback-form.component.css'],
})
export class NewFeedbackFormComponent implements OnInit {
  feedbackForm!: FormGroup;
  categories = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  constructor(
    private router: Router,
    private formBuilders: FormBuilder,
    private apiService: ApiService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.feedbackForm = this.formBuilders.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      detail: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.feedbackForm.valid) {
      const newFeedback = this.apiService.createFeedback(
        this.feedbackForm.value
      );
      newFeedback.subscribe((data) =>
        this.store.dispatch(addFeedback({ feedback: data }))
      );
    }
    this.router.navigate(['/', 'dashboard']);
  }

  navigateToDashboard() {
    this.router.navigate(['/', 'dashboard']);
  }
}
