import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlotComponent } from './charts/flot/flot.component';
import { RadialComponent } from './charts/radial/radial.component';
import { RickshawComponent } from './charts/rickshaw/rickshaw.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DashboardComponent,
    FlotComponent,
    RadialComponent,
    RickshawComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
