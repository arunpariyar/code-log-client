import { createSelector } from '@ngrx/store';
import { AppState } from '../models/appstate';

export const selectFeedback = (state: AppState) => state.feedback;
