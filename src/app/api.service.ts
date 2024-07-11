import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './models/feedback';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.url;
  constructor(private http: HttpClient) {}

  createFeedback(feedback: Partial<Feedback>): Observable<Feedback> {
    return this.http.post<Feedback>(this.apiUrl + '/api/feedback', feedback);
  }
  getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl + '/api/feedback');
  }
  getFeedbackById(id: string): Observable<Feedback> {
    return this.http.get<Feedback>(this.apiUrl + '/api/feedback/' + id);
  }
  updateFeedback(id: string, changes: Partial<Feedback>): Observable<Feedback> {
    return this.http.patch<Feedback>(
      this.apiUrl + '/api/feedback/' + id,
      changes
    );
  }
  deleteFeedback(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      this.apiUrl + '/api/feedback/' + id
    );
  }
  upvoteFeedback(id: string): Observable<Feedback> {
    return this.http.get<Feedback>(
      this.apiUrl + '/api/feedback/' + id + '/upvote'
    );
  }
}
