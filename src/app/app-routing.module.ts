import { BlogBranchComponent } from './pages/blog-branch/blog-branch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBranchComponent } from './pages/home-branch/home-branch.component';
import { ContactComponent } from './pages/contact-branch/contact/contact.component';
import { OurProjectsBranchComponent } from './pages/our-projects-branch/our-projects-branch.component';
import { AllCoursesBranchComponent } from './pages/all-courses-branch/all-courses-branch.component';

const routes: Routes = [
  {path: '', component: HomeBranchComponent},
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'our-projects', component: OurProjectsBranchComponent
  },
  {
    path: 'blog', component: BlogBranchComponent
  },
  {
    path: 'all-courses',component: AllCoursesBranchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
