import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import the routes that contains the info for the routing between components
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    // create a model that includes all necessary info (router directives,configuration and instantiation of the router service.)
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
