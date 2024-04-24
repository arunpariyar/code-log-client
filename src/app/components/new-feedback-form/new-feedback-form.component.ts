import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ConstantPool } from '@angular/compiler';

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
    private apiService: ApiService
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
      console.log(this.feedbackForm.value);
      const newFeedback = this.apiService.createFeedback(
        this.feedbackForm.value
      );
      newFeedback.subscribe((data) => console.log(data));
      //TODO intergrate ngRx and then add it directly there
    }
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
