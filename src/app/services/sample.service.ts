// import this to be able to create injectable classes
import { Injectable } from '@angular/core';
// import these to make use of the observable that are needed for HTTP request
import { Observable } from 'rxjs';
// use the Samples data
import { Samples } from '../shared/samples';


import { HttpClient } from '@angular/common/http';
import { urlBase } from '../shared/urlBase';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
// ask JSON data from server and fetch these data using the get() method
export class SampleService {

  constructor(private http: HttpClient) { }
  // return an observable of Samples array
  // the data are taken from the JSON server using the http.get method
  getSamples(): Observable<Samples[]> {
    return this.http.get<Samples[]>(urlBase + 'samples');
  }

  // this is needed for the SPA, when you click on any sample you get its detailed "page"
  getSample(id: number): Observable<Samples> {
    return this.http.get<Samples>(urlBase + 'samples/' + id);
  }

}
