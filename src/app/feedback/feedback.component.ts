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
    private feedbkformbuilding: FormBuilder) {this.createForm(); }

    ngOnInit() {
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
      this.feedbk = this.feedbackForm.value;
      // console.log(this.feedbk);
      // this.feedbacks.push(this.feedbk);
      // add new data to the JSON file
      this.feedBackService.addFeedbacks(this.feedbk).subscribe(feedbk => this.feedbacks.push(this.feedbk));
      this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        message: ''
      });
    }



}
