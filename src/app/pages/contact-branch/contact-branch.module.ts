import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactBranchRoutingModule } from './contact-branch-routing.module';
import { ContactBranchComponent } from './contact-branch.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ContactBranchComponent,
    MapComponent,
    ContactComponent
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
