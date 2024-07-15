import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../models/appstate';
import { Feedback } from '../models/feedback';

export const selectFeatureFeedback =
  createFeatureSelector<AppState>('feedback');

export const selectFeatureFilter = createFeatureSelector<AppState>('filter');

export const selectFeedback = createSelector(
  selectFeatureFeedback,
  (state) => state.feedback
);

export const selectFilter = createSelector(
  selectFeatureFeedback,
  (state) => state.filter
);

export const selectFilteredFeedback = createSelector(
  selectFeedback,
  selectFilter,
  (feedback, filter) => {
    if (filter === 'All') {
      return feedback;
    } else {
      return feedback.filter((item) => item.category === filter);
    }
  }
);
