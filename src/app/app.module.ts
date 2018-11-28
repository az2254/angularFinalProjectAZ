import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplesComponent } from './samples/samples.component';
import { SamplesInfoComponent } from './samples-info/samples-info.component';

import { SampleService } from './services/sample.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    SamplesInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SampleService],
  // providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
