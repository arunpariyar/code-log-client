import { Component } from '@angular/core';
import { NewFeedbackFormComponent } from '../new-feedback-form/new-feedback-form.component';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Store } from '@ngrx/store';
import { init } from 'src/app/store/feedback.actions';
import { Feedback } from 'src/app/models/feedback';
import { Observable } from 'rxjs';
import { selectFeedback } from 'src/app/store/feedback.selector';
import { map } from 'rxjs';

@Component({
  selector: 'app-edit-feedback-from',
  templateUrl: './edit-feedback-from.component.html',
  styleUrls: ['./edit-feedback-from.component.css'],
})
export class EditFeedbackFromComponent
  extends NewFeedbackFormComponent
  implements OnInit
{
  id!: string;
  allFeedbacks$!: Observable<Feedback[]>;
  currentFeedback!: Feedback;

  constructor(
    private eRouter: Router,
    private eformBuilder: FormBuilder,
    private eApiService: ApiService,
    private eStore: Store<{ feedback: Feedback[]; filter: String }>,
    private route: ActivatedRoute
  ) {
    super(eRouter, eformBuilder, eApiService, eStore);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.feedbackForm = this.eformBuilder.group({
      ...this.feedbackForm.controls,
      status: ['', Validators.required],
    });

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getFeedbacks(this.id);
    }
  }

  getFeedbacks(id: string): void {
    this.eStore.dispatch(init());
    this.allFeedbacks$ = this.eStore.select(selectFeedback);

    this.allFeedbacks$
      .pipe(map((data) => data.filter((result) => result.id === id)))
      .subscribe((data) => {
        if (data.length > 0) {
          const { title, category, detail, status } = data[0];
          this.feedbackForm.patchValue({
            title,
            category,
            detail,
            status,
          });
        }
      });
  }

  override submitForm() {
    if (this.feedbackForm.valid) {
      this.eApiService
        .updateFeedback(this.id, this.feedbackForm.value)
        .subscribe({
          next: () => {
            console.log('feedback updated ✨');
            this.reloadStore();
            this.feedbackForm.reset();
            this.redirectToDashboard();
          },
          error: (error) => {
            console.error('Error:', error);
          },
        });
    }
  }

  handleCancel() {
    this.redirectToDashboard();
  }

  reloadStore() {
    this.eStore.dispatch(init());
  }

  handleDeleteClick(event: MouseEvent) {
    event.preventDefault();
    if (confirm('Are you sure to you want to delete ?')) {
      this.eApiService.deleteFeedback(this.id).subscribe({
        next: () => {
          this.reloadStore();
          this.redirectToDashboard();
          console.log('feedback deleted ✨');
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  redirectToDashboard() {
    this.eRouter.navigate(['/', 'dashboard']);
  }
}
