import { Component, OnInit } from '@angular/core';
import { Samples } from './shared/samples';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  samples: Samples[] = [
    {
      name: 'Money Laundering' ,
      image: '/assets/images/sample1.png',
      category: 'Rise to 360 conversion',
      description: 'Conversion of Articulate Rise module to 360. Template and interactions creation.',
    },
    {
      name: 'Articulate Simple Game',
      image: '/assets/images/sample_2.png',
      category: 'Development of a Game in Articulate Storyline using JavaScript',
      description: 'Combination of basic JavaScript with Articulate Storyline',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
