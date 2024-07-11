import { createReducer, on } from '@ngrx/store';
import { Feedback } from '../models/feedback';
import { addFeedback, getAllFeedbackApi, set } from './feedback.actions';

const initialState: Feedback[] = [];

export const feedbackReducer = createReducer(
  initialState,
  //TODO - this should start an effect for sending data to server
  on(addFeedback, (state, action) => {
    return [...state, action.feedback];
  }),
  on(getAllFeedbackApi, (_, action) => {
    return [...action.feedbacks];
  }),
  on(set, (state, action) => action.feedbacks)
);
