import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderIntroComponent } from './components/header-intro/header-intro.component';
import { IDidItComponent } from './components/i-did-it/i-did-it.component';
import { NaturalHerbMineralComponent } from './components/natural-herb-mineral/natural-herb-mineral.component';
import { CuttingComponent } from './components/cutting/cutting.component';
import { VisitProjectButtonComponent } from './components/visit-project-button/visit-project-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpcomingEventsComponent,
    FooterComponent,
    HeaderIntroComponent,
    IDidItComponent,
    NaturalHerbMineralComponent,
    CuttingComponent,
    VisitProjectButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
