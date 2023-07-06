import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCoursesBranchModule } from './pages/all-courses-branch/all-courses-branch.module';
import { OurProjectsBranchModule } from './pages/our-projects-branch/our-projects-branch.module';
import { HomeBranchModule } from './pages/home-branch/home-branch.module';
import { ContactBranchModule } from './pages/contact-branch/contact-branch.module';
import { BlogBranchModule } from './pages/blog-branch/blog-branch.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownComponent } from './components/navbar/dropdown/dropdown/dropdown.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, DropdownComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllCoursesBranchModule,
    OurProjectsBranchModule,
    HomeBranchModule,
    ContactBranchModule,
    BlogBranchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
