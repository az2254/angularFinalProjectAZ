import { Injectable } from '@angular/core';
import { Samples } from '../shared/samples';
import { allSAMPLES } from '../shared/allSamples';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }
  
  getSamples(): Samples[] {
    return allSAMPLES;
  }
}
