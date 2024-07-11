export interface Feedback {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  detail: string;
  createdAt: string;
  updatedAt: string;
  //TODO bring this back again later when the user is integrated
  // comments: Comment[];
  // authorId: string;
}
