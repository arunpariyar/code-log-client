import { createAction, props } from '@ngrx/store';
import { Feedback } from '../model/feedback';

export const init = createAction('[Feedback] Init');

export const set = createAction(
  '[Feedback] SET',
  props<{ feedback: Feedback[] }>()
);

export const addFeedback = createAction(
  '[Feedback] ADDFEEDBACK',
  props<{ feedback: Feedback }>()
);

export const getAllFeedbackApi = createAction(
  '[Feedback] GETALLFEEDBACK',
  props<{ feedback: Feedback[] }>()
);
