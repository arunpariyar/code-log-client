import { createAction, props } from '@ngrx/store';
import { Feedback } from '../models/feedback';

export const init = createAction('[Feedback] Init');

export const set = createAction(
  '[Feedback] SET',
  props<{ feedbacks: Feedback[] }>()
);

export const addFeedback = createAction(
  '[Feedback] ADDFEEDBACK',
  props<{ feedback: Feedback }>()
);

export const getAllFeedbackApi = createAction(
  '[Feedback] GETALLFEEDBACK',
  props<{ feedbacks: Feedback[] }>()
);

export const upvote = createAction(
  '[Feedback] UPVOTE_FEEDBACK',
  props<{ payload: string }>()
);

export const upvoteSuccess = createAction(
  '[Feedback] Upvote Success',
  props<{ result: Feedback }>()
);

// NOT NEEDED JUST YET - NO REDUCER FOR THIS JUST YET
export const upvoteFailure = createAction(
  '[Feedback] Upvote Failure',
  props<{ error: string }>()
);
