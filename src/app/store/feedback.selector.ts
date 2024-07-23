import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../models/appstate';
import { Feedback } from '../models/feedback';
import { keyframes } from '@angular/animations';

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

export const allStatusArray = createSelector(selectFeedback, (state) => {
  let list = [
    { key: 'Planned', value: 0, color: '#f49f85' },
    { key: 'InProgress', value: 0, color: '#ad2fea' },
    { key: 'Live', value: 0, color: '#62bcfa' },
  ];

  state.forEach((feedback) => {
    list.forEach((item) => {
      if (item.key === feedback.status) {
        item.value++;
      }
    });
  });

  return list;
});

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
