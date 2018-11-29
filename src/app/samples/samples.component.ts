import { Component, OnInit, Inject } from '@angular/core';
import { Samples } from '../shared/samples';
// import { allSAMPLES } from '../shared/allSamples';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  // samples = allSAMPLES;
  samples : Samples[];
  // selectedSamples : Samples ;

  // onSelect(sample:Samples) {
  //   this.selectedSamples = sample
  // }

  constructor(private sampleService: SampleService,
    @Inject('UrlBase') public UrlBase) { }

  ngOnInit() {
    // use the values producted by observables to return all the samples
    this.sampleService.getSamples().subscribe(samples => this.samples = samples);
  }

}
