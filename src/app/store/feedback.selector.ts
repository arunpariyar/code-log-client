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
    switch (filter) {
      case 'MOST_UPVOTES':
        const mostUpvoteSorted = [...feedback].sort(
          (a, b) => b.upvotes - a.upvotes
        );
        return mostUpvoteSorted;
      case 'LEAST_UPVOTES':
        const leastUpvoteSorted = [...feedback].sort(
          (a, b) => a.upvotes - b.upvotes
        );
        return leastUpvoteSorted;
      case 'All':
        return feedback;
      default:
        return feedback.filter((item) => item.category === filter);
    }
  }
);
