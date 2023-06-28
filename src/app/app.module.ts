import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderCoursesComponent } from './components/header-courses/header-courses.component';
import { IntroFeedComponent } from './components/intro-feed/intro-feed.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { JoinComponent } from './components/join/join.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderCoursesComponent,
    IntroFeedComponent,
    OurProjectsComponent,
    UpcomingEventsComponent,
    JoinComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
