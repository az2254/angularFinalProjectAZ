import { Component, OnInit, Inject} from '@angular/core';
import { Samples } from '../shared/samples';
// use that to use snapshot to create a new instance of samples-info
import { Params, ActivatedRoute } from '@angular/router';
// use that to enable the use of go back in the previous "page"
import { Location } from '@angular/common';
import { SampleService } from '../services/sample.service';

// injects the SampleService and calls the getSample() service method
@Component({
  selector: 'app-samples-info',
  templateUrl: './samples-info.component.html',
  styleUrls: ['./samples-info.component.css']
})
export class SamplesInfoComponent implements OnInit {
  // @Input()
  sample: Samples;

  constructor(private sampleService: SampleService,
    @Inject('UrlBase') public UrlBase,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // this.sample = this.sampleService.getSample(id);
    // use the values producted by observables to return the specific sample (using filter from sample.service)
    this.sampleService.getSample(id).subscribe(sample => this.sample = sample);
  }

  goBack(): void {
    this.location.back();
  }

}
