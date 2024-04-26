import { createReducer, on } from '@ngrx/store';
import { Feedback } from '../model/feedback';
import { addFeedback } from './feedback.actions';

const initialState: Feedback[] = [
  {
    id: '6c84fb92-12c4-11e1-840d-7b25c5ee775c',
    title: 'Customizable Colors',
    category: 'UI',
    upvotes: 1,
    detail:
      'It would be great if we could customize the user interface colors. Can this feature be added?',
    status: 'Open',

    createdAt: '2024-04-22T13:55:10Z',
    updatedAt: '2024-04-22T13:55:10Z',
  },
];

export const feedbackReducer = createReducer(
  initialState,
  on(addFeedback, (state, action) => {
    console.log('here is the data', state, action);
    return [...state, action.feedback];
  })
);
