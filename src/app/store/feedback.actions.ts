import { createAction, props } from '@ngrx/store';
import { Feedback } from '../model/feedback';

export const addFeedback = createAction(
  '[Feedback] ADDFEEDBACK',
  props<{ feedback: Feedback }>()
);
