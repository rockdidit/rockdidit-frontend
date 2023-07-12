import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBranchRoutingModule } from './home-branch-routing.module';
import { HomeBranchComponent } from './home-branch.component';
import { HeaderCoursesComponent } from './header-courses/header-courses.component';
import { IntroFeedComponent } from './intro-feed/intro-feed.component';
import { JoinComponent } from './join/join.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeBranchComponent,
    HeaderCoursesComponent,
    IntroFeedComponent,
    JoinComponent,
    OurProjectsComponent,
    UpcomingEventsComponent,
  ],
  imports: [CommonModule, HomeBranchRoutingModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeBranchModule {}
