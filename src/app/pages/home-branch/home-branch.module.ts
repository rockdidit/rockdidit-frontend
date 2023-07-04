import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBranchRoutingModule } from './home-branch-routing.module';
import { HomeBranchComponent } from './home-branch.component';

@NgModule({
  declarations: [HomeBranchComponent],
  imports: [
    CommonModule,
    HomeBranchRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeBranchModule {}
