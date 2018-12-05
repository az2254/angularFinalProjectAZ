import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// use the routing
import { AppRoutingModule } from './app-routing.module';
// use this to obtain data from a server
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SamplesComponent } from './samples/samples.component';
import { SamplesInfoComponent } from './samples-info/samples-info.component';

import { SampleService } from './services/sample.service';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { urlBase } from './shared/urlBase';
import { FeedbackComponent } from './feedback/feedback.component';

import { FeedbackService } from './services/feedback.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    SamplesInfoComponent,
    FooterComponent,
    HomeComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  // add everything that should be available for all components
  providers: [FeedbackService, SampleService,
    // take value of urlBase
    { provide: 'UrlBase', useValue: urlBase }],
  bootstrap: [AppComponent],

})
export class AppModule { }
