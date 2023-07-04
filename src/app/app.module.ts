import { VisitProjectButtonComponent } from './pages/our-projects-branch/visit-project-button/visit-project-button.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBranchComponent } from './pages/home-branch/home-branch.component';
import { HeaderCoursesComponent } from './pages/home-branch/header-courses/header-courses.component';
import { IntroFeedComponent } from './pages/home-branch/intro-feed/intro-feed.component';
import { JoinComponent } from './pages/home-branch/join/join.component';
import { OurProjectsComponent } from './pages/home-branch/our-projects/our-projects.component';
import { UpcomingEventsComponent } from './pages/home-branch/upcoming-events/upcoming-events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './pages/blog-branch/blog/blog.component';
import { ContactComponent } from './pages/contact-branch/contact/contact.component';
import { MapComponent } from './pages/contact-branch/map/map.component';
import { CuttingComponent } from './pages/our-projects-branch/cutting/cutting.component';
import { HeaderIntroComponent } from './pages/our-projects-branch/header-intro/header-intro.component';
import { IDidItComponent } from './pages/our-projects-branch/i-did-it/i-did-it.component';
import { NaturalHerbMineralComponent } from './pages/our-projects-branch/natural-herb-mineral/natural-herb-mineral.component';
import { OurProjectsBranchComponent } from './pages/our-projects-branch/our-projects-branch.component';
import { ContactBranchComponent } from './pages/contact-branch/contact-branch.component';
import { BlogBranchComponent } from './pages/blog-branch/blog-branch.component';
import { AllCoursesBranchModule } from './pages/all-courses-branch/all-courses-branch.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeBranchComponent,
    HeaderCoursesComponent,
    IntroFeedComponent,
    JoinComponent,
    OurProjectsComponent,
    UpcomingEventsComponent,
    BlogComponent,
    ContactComponent,
    MapComponent,
    CuttingComponent,
    HeaderIntroComponent,
    IDidItComponent,
    NaturalHerbMineralComponent,
    UpcomingEventsComponent,
    VisitProjectButtonComponent,
    OurProjectsBranchComponent,
    HomeBranchComponent,
    ContactBranchComponent,
    BlogBranchComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AllCoursesBranchModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
