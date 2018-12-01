import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedbackUs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { urlBase } from '../shared/urlBase';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }
  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(urlBase + 'feedback');
}

// store the feedbk data to the JSON file
addFeedbacks(feedbk: Feedback): Observable<Feedback[]> {
  return this.http.post<Feedback[]>(urlBase + 'feedback', feedbk);
 }
}
