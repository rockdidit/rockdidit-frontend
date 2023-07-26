import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogBranchRoutingModule } from './blog-branch-routing.module';
import { BlogBranchComponent } from './blog-branch.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    BlogBranchComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogBranchRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BlogBranchModule { }
