import { Component, OnInit, Inject } from '@angular/core';
import { Feedback } from '../shared/feedbackUs';
import { FeedbackService } from '../services/feedback.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[];
  // create instance of FormGroup
  feedbackForm: FormGroup;
  feedbk: Feedback;
  constructor(private feedBackService: FeedbackService,
    @Inject('UrlBase') public UrlBase,
    // use FormBuilder to create FormControl instances with the appropriate names
    private feedbkformbuilding: FormBuilder) { this.createForm(); }

  ngOnInit() {
    // use this method from feedback.service to return the available feedbacks
    this.feedBackService.getFeedbacks().subscribe(feedbacks => this.feedbacks = feedbacks);
  }
  // create the form
  createForm() {
    this.feedbackForm = this.feedbkformbuilding.group({
      firstname: '',
      lastname: '',
      message: ''
    });
  }
  //take the user's input and display it on the page.
  onSubmitFeedback() {
    // apply the value the user has entered to this.feedbk property
    this.feedbk = this.feedbackForm.value;
    // add new data to the JSON file
    // use push to add the new data
    this.feedBackService.addFeedbacks(this.feedbk).subscribe(feedbk => this.feedbacks.push(this.feedbk));
    // reset to initial values
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      message: ''
    });
  }



}
