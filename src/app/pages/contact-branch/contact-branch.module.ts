import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactBranchRoutingModule } from './contact-branch-routing.module';
import { ContactBranchComponent } from './contact-branch.component';


@NgModule({
  declarations: [
    ContactBranchComponent
  ],
  imports: [
    CommonModule,
    ContactBranchRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContactBranchModule { }
