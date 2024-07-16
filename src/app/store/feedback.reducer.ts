import { createReducer, on } from '@ngrx/store';
import { Feedback } from '../models/feedback';
import {
  addFeedback,
  getAllFeedbackApi,
  set,
  upvoteSuccess,
  setFilter,
} from './feedback.actions';
import { AppState } from '../models/appstate';

const initialState: AppState = {
  feedback: [],
  filter: 'All',
};

export const feedbackReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => {
    return { ...state, filter };
  }),
  on(addFeedback, (state, { feedback }) => {
    return { feedback: [...state.feedback, feedback], filter: state.filter };
  }),
  on(getAllFeedbackApi, (state, { feedbacks }) => {
    return { feedback: [...feedbacks], filter: state.filter };
  }),
  on(upvoteSuccess, (state, action) => {
    const result = state.feedback
      .map((feedback) => {
        if (feedback.id === action.result.id) {
          return { ...feedback, upvotes: action.result.upvotes };
        }
        return feedback;
      })
      .sort((a, b) => a.upvotes - b.upvotes);

    return { feedback: [...result], filter: state.filter };
  }),
  on(set, (state, { feedbacks }) => {
    return { ...state, feedback: feedbacks };
  })
);
