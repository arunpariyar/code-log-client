import { Component } from '@angular/core';
import { NewFeedbackFormComponent } from '../new-feedback-form/new-feedback-form.component';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Store } from '@ngrx/store';
import { init } from 'src/app/store/feedback.actions';
import { Feedback } from 'src/app/model/feedback';
import { Observable } from 'rxjs';
import { AppState, selectFeedback } from 'src/app/store/feedback.selector';
import { map, filter } from 'rxjs';
import { addFeedback } from 'src/app/store/feedback.actions';

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
    private eStore: Store<{ feedback: Feedback[] }>,
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
    this.getFeedbacks(this.id);
  }

  getFeedbacks(id: string): void {
    this.eStore.dispatch(init());
    this.allFeedbacks$ = this.eStore.select(selectFeedback);

    this.allFeedbacks$
      .pipe(map((data) => data.filter((result) => result.id === this.id)))
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

  handleAddSubmit() {
    console.log(this.id);
    console.log(this.feedbackForm.value);
    // if (this.feedbackForm.valid) {
    //   this.eApiService.updateFeedback(this.id, this.feedbackForm.value);
    // }
  }
  // this.eRouter.navigate(['/', 'dashboard']);
}

// submitForm() {
//   if (this.feedbackForm.valid) {
//     const newFeedback = this.apiService.createFeedback(
//       this.feedbackForm.value
//     );
//     newFeedback.subscribe((data) =>
//       this.store.dispatch(addFeedback({ feedback: data }))
//     );
//   }
//   this.router.navigate(['/', 'dashboard']);
// }

// navigateToDashboard() {
//   this.router.navigate(['/', 'dashboard']);
// }
