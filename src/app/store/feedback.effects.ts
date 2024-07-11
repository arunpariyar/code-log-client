import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../api.service';
import { getAllFeedbackApi, init, set, upvote } from './feedback.actions';
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
          map((feedbacks) => set({ feedbacks: feedbacks })),
          catchError((error) => EMPTY)
        )
      )
    )
  );
  // upvoteFeedback$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(upvote),
  //     mergeMap((action) =>
  //       this.apiService.upvoteFeedback(action.payload).pipe(map(feedback))
  //     )
  //   )
  // );
}
