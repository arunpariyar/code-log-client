import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../api.service';
import {
  init,
  set,
  upvote,
  upvoteSuccess,
  upvoteFailure,
} from './feedback.actions';
import { catchError, mergeMap, map, of, EMPTY, exhaustMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedbackEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}
  loadFeedbacks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      mergeMap(() =>
        this.apiService.getAllFeedback().pipe(
          map((feedbacks) =>
            set({ feedbacks: feedbacks.sort((a, b) => a.upvotes - b.upvotes) })
          ),
          catchError((error) => EMPTY)
        )
      )
    )
  );

  upvoteFeedback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(upvote),
      exhaustMap((action) =>
        this.apiService.upvoteFeedback(action.payload).pipe(
          map((response) => upvoteSuccess({ result: response })),
          catchError(() =>
            of(upvoteFailure({ error: 'Failed to upvote feedback' }))
          )
        )
      )
    )
  );
}
