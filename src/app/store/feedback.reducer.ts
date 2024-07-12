import { createReducer, on } from '@ngrx/store';
import { Feedback } from '../models/feedback';
import {
  addFeedback,
  getAllFeedbackApi,
  set,
  upvoteSuccess,
} from './feedback.actions';

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
  on(upvoteSuccess, (state, action) => {
    return state
      .map((feedback) => {
        if (feedback.id === action.result.id) {
          return { ...feedback, upvotes: action.result.upvotes };
        }
        return feedback;
      })
      .sort((a, b) => a.upvotes - b.upvotes);
  }),
  on(set, (_, action) => action.feedbacks)
);
