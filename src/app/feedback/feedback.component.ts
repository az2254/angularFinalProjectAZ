import { Component, OnInit, Inject } from '@angular/core';
import { Feedback } from '../shared/feedbackUs';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[];
  constructor(private feedBackService: FeedbackService,
    @Inject('UrlBase') public UrlBase) { }

  ngOnInit() {
    this.feedBackService.getFeedbacks().subscribe(feedbacks => this.feedbacks = feedbacks);
  }

}
