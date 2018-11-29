import { Injectable } from '@angular/core';
// import these to make use of the observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { Samples } from '../shared/samples';
import { allSAMPLES } from '../shared/allSamples';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  // create an observable of Samples [] array 
  getSamples(): Observable<Samples[]> {
    return Observable.of(allSAMPLES).delay(2000);
  }
  // return appropiate Samples (using id equal and of the same type )
  getSample(id: number): Observable<Samples> {
    return Observable.of(allSAMPLES.filter((sample) => (sample.id === id))[0]).delay(2000);
  }
  
}
