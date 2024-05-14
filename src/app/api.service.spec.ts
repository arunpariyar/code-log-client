import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  mockFeedbacks,
  postMock,
  patchMock,
} from 'src/test-data/mock-feedbacks';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should retreive all course', () => {
    apiService.getAllFeedback().subscribe((feedbacks) => {
      expect(feedbacks).toBeTruthy();
      expect(feedbacks.length).toBe(5);
      expect(feedbacks).toEqual(mockFeedbacks);
    });

    //create mock for http implmentation
    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/feedback'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockFeedbacks);
  });

  it('should create a feedback', () => {
    apiService.createFeedback(postMock.entry).subscribe((feedback) => {
      expect(feedback).toBeTruthy();
      expect(feedback).toBe(postMock.entryCreated);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/feedback'
    );
    expect(req.request.method).toEqual('POST');
    req.flush(postMock.entryCreated);
  });

  it('should retreive feedback by id', () => {
    const id = 'e99d7eb0-e12e-4c3c-97eb-6739de03397a';

    apiService.getFeedbackById(id).subscribe((feedback) => {
      expect(feedback).toBeTruthy();
      expect(feedback).toBe(postMock.entryCreated);
    });

    const url =
      'http://localhost:8000/api/feedback/e99d7eb0-e12e-4c3c-97eb-6739de03397a';

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(postMock.entryCreated);
  });

  it('should patch feedback', () => {
    apiService
      .updateFeedback(patchMock.id, patchMock.partialFeedback)
      .subscribe((feedback) => {
        expect(feedback).toBeTruthy();
        expect(feedback.id).toEqual(patchMock.id);
        expect(feedback).toBe(patchMock.updatedFeedback);
      });

    const url = `http://localhost:8000/api/feedback/${patchMock.id}`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('PATCH');
    req.flush(patchMock.updatedFeedback);
  });

  fit('should fail the updated', () => {
    apiService
      .updateFeedback(patchMock.errorId, patchMock.partialFeedback)
      .subscribe({
        error: (error) => {
          expect(error.status).toBe(500);
          expect(error).toBe(patchMock.errorMessage);
        },
      });
    const url = `http://localhost:8000/api/feedback/${patchMock.errorId}`;
    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('PATCH');
    req.flush(patchMock.errorMessage);
  });
});
