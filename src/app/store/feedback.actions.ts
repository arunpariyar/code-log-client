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
