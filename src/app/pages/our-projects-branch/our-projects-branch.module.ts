import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurProjectsBranchRoutingModule } from './our-projects-branch-routing.module';
import { OurProjectsBranchComponent } from './our-projects-branch.component';


@NgModule({
  declarations: [
    OurProjectsBranchComponent
  ],
  imports: [
    CommonModule,
    OurProjectsBranchRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurProjectsBranchModule { }
