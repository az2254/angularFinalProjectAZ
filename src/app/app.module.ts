import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// use this to obtain data from a server
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SamplesComponent } from './samples/samples.component';
import { SamplesInfoComponent } from './samples-info/samples-info.component';

import { SampleService } from './services/sample.service';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { urlBase } from './shared/urlBase';
import { FeedbackComponent } from './feedback/feedback.component';

import { FeedbackService } from './services/feedback.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    SamplesInfoComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FeedbackService, SampleService, 
    {provide: 'UrlBase', useValue: urlBase}],
  // providers: [SampleService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
