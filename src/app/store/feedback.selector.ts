import { createSelector } from '@ngrx/store';
import { Feedback } from '../model/feedback';

export interface AppState {
  feedback: Feedback[];
}

export const selectFeedback = (state: AppState) => state.feedback;
