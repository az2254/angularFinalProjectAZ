import { Injectable } from '@angular/core';
// import these to make use of the observable
import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { delay } from 'rxjs/internal/operators';


import { Samples } from '../shared/samples';
// import { allSAMPLES } from '../shared/allSamples';

import { HttpClient } from '@angular/common/http';
import { urlBase } from '../shared/urlBase';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
// asks JSON data from server and fetches these data using the get() method
export class SampleService {

  constructor(private http: HttpClient) { }

  getSamples(): Observable<Samples[]> {
    return this.http.get<Samples[]>(urlBase + 'samples');
    }

  // // create an observable of Samples [] array 
  // getSamples(): Observable<Samples[]> {
  //   return of(allSAMPLES).pipe(delay(2000));
  // }

  // // return appropiate Samples (using id equal and of the same type )
  // getSample(id: number): Observable<Samples> {
  //   // this is an update for this version 
  //   return of(allSAMPLES.filter((sample) => (sample.id === id))[0]).pipe(delay(2000));
  // }

  getSample(id: number): Observable<Samples> {
    return this.http.get<Samples>(urlBase + 'samples/' + id);
    }
  
}
