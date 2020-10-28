import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CategoryComponentComponent } from './category-component/category-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';

//Angular Material Module
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { DonationViewComponent } from './views/donation-view/donation-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';





@NgModule({
  declarations: [
    AppComponent,
    CategoryComponentComponent,
    DonationViewComponent,
    AboutViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSliderModule,
    MatProgressBarModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
