import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurProjectsBranchRoutingModule } from './our-projects-branch-routing.module';
import { OurProjectsBranchComponent } from './our-projects-branch.component';
import { VisitProjectButtonComponent } from './visit-project-button/visit-project-button.component';
import { UpcomingEventsComponent } from '../home-branch/upcoming-events/upcoming-events.component';
import { NaturalHerbMineralComponent } from './natural-herb-mineral/natural-herb-mineral.component';
import { IDidItComponent } from './i-did-it/i-did-it.component';
import { HeaderIntroComponent } from './header-intro/header-intro.component';
import { CuttingComponent } from './cutting/cutting.component';

@NgModule({
  declarations: [
    OurProjectsBranchComponent,
    VisitProjectButtonComponent,
    UpcomingEventsComponent,
    NaturalHerbMineralComponent,
    IDidItComponent,
    HeaderIntroComponent,
    CuttingComponent,
  ],
  imports: [CommonModule, OurProjectsBranchRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurProjectsBranchModule {}
