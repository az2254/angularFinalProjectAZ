// import Routes to validate route configuration during development
import { Routes } from '@angular/router';
// import all the components where routing will be used
import { SamplesComponent } from '../samples/samples.component';
import { SamplesInfoComponent } from '../samples-info/samples-info.component';
import { HomeComponent } from '../home/home.component';
import { FeedbackComponent } from '../feedback/feedback.component';
//  all possible router states
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'samples', component: SamplesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // find the samples-info with the id given
  { path: 'samples-info/:id', component: SamplesInfoComponent },
  { path: 'feedback', component: FeedbackComponent },
];