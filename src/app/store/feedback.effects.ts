import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../api.service';
import { getAllFeedbackApi, init, set } from './feedback.actions';
import { catchError, mergeMap, map, of, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedbackEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}
  loadFeedbacks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      mergeMap(() =>
        this.apiService.getAllFeedback().pipe(
          map((feedbacks) => set({ feedback: feedbacks })),
          catchError((error) => EMPTY)
        )
      )
    )
  );
}
