export const mockFeedbacks = [
  {
    id: 'e99d7eb0-e12e-4c3c-97eb-6739de03397a',
    title: 'Syncing Issue',
    category: 'UX',
    upvotes: 1,
    status: 'Planned',
    detail: 'Having trouble syncing my plant data across devices.',
    createdAt: '2024-05-09T12:39:13.148Z',
    updatedAt: '2024-05-09T12:39:13.148Z',
  },
  {
    id: '3ce09b77-4e5a-4797-a5ef-138820f346bd',
    title: 'Watering Reminder Customization',
    category: 'UI',
    upvotes: 2,
    status: 'Planned',
    detail:
      'It would be great to have more options to customize watering reminders.',
    createdAt: '2024-05-09T12:39:13.171Z',
    updatedAt: '2024-05-09T12:39:13.171Z',
  },
  {
    id: '8650c17a-7361-4e8f-90fa-739d69d1cdce',
    title: 'Plant Identification Accuracy',
    category: 'Bug',
    upvotes: 3,
    status: 'Planned',
    detail:
      "Some plants are misidentified by the app's image recognition feature.",
    createdAt: '2024-05-09T12:39:13.175Z',
    updatedAt: '2024-05-09T12:39:13.175Z',
  },
  {
    id: '93bb6a19-fc68-466a-b11e-3aad96314617',
    title: 'Dark Mode Support',
    category: 'Enhancement',
    upvotes: 4,
    status: 'Planned',
    detail:
      'Would love to have a dark mode option for better usability at night.',
    createdAt: '2024-05-09T12:39:13.176Z',
    updatedAt: '2024-05-09T12:39:13.176Z',
  },
  {
    id: '148a7c31-17ba-4ef1-a5a7-9c0908afcd3b',
    title: 'Offline Mode',
    category: 'Feature',
    upvotes: 0,
    status: 'Live',
    detail: 'changed from postman',
    createdAt: '2024-05-09T12:39:13.177Z',
    updatedAt: '2024-05-09T15:35:54.152Z',
  },
];

export const postMock = {
  entry: {
    title: 'Syncing Issue',
    category: 'UX',
    detail: 'Having trouble syncing my plant data across devices.',
  },
  entryCreated: {
    id: 'e99d7eb0-e12e-4c3c-97eb-6739de03397a',
    title: 'Syncing Issue',
    category: 'UX',
    upvotes: 1,
    status: 'Planned',
    detail: 'Having trouble syncing my plant data across devices.',
    createdAt: '2024-05-09T12:39:13.148Z',
    updatedAt: '2024-05-09T12:39:13.148Z',
  },
};

export const patchMock = {
  id: '148a7c31-17ba-4ef1-a5a7-9c0908afcd3b',
  partialFeedback: {
    detail: 'changed from test',
    status: 'Live',
  },
  updatedFeedback: {
    id: '148a7c31-17ba-4ef1-a5a7-9c0908afcd3b',
    title: 'Offline Mode',
    category: 'Feature',
    upvotes: 0,
    status: 'Live',
    detail: 'changed from test',
    createdAt: '2024-05-09T12:39:13.177Z',
    updatedAt: '2024-05-14T08:55:24.238Z',
  },
  errorId: '148a7c31',
  errorMessage: {
    message: 'feedback with id: 148a7c31 not found',
  },
};
