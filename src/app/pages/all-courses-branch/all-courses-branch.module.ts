import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCoursesBranchRoutingModule } from './all-courses-branch-routing.module';
import { AllCoursesBranchComponent } from './all-courses-branch.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';


@NgModule({
  declarations: [
    AllCoursesBranchComponent,
    AllcoursesComponent
  ],
  imports: [
    CommonModule,
    AllCoursesBranchRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AllCoursesBranchModule { }
