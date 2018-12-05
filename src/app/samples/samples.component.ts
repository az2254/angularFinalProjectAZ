// import "Inject" so that we can use the @Inject
import { Component, OnInit, Inject } from '@angular/core';
// import Samples class and SampleService
import { Samples } from '../shared/samples';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  samples: Samples[];
  // make the service that we have imported available for our components to use it. 
  // with the constructor we create a replicate of the SampleService
  constructor(private sampleService: SampleService,
    @Inject('UrlBase') public UrlBase) { }

  ngOnInit() {
    // use the values producted by observables to return all the samples
    this.sampleService.getSamples().subscribe(samples => this.samples = samples);
  }

}
