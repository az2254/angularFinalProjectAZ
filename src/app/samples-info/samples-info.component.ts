import { Component, OnInit, Input } from '@angular/core';
import { Samples } from '../shared/samples';


@Component({
  selector: 'app-samples-info',
  templateUrl: './samples-info.component.html',
  styleUrls: ['./samples-info.component.css']
})
export class SamplesInfoComponent implements OnInit {
  @Input()
  sample: Samples;

  constructor() { }

  ngOnInit() {
  }

}
