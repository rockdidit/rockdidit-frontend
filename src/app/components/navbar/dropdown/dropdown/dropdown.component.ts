import { Component } from '@angular/core';
import { AnimationService } from 'src/app/providers/animations/animation.service';

type dropDownItems = {
  title: string;
  childrens?: string[];
  route?: string[];
};
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [AnimationService],
})
export class DropdownComponent {
  constructor(private animationService: AnimationService) {}
  collapsedSections: string[] = [];

  toggleCollapse(sectionId: string) {
    this.animationService.toggleCollapse(sectionId);
  }

  isCollapsed(sectionId: string): boolean {
    return this.animationService.isCollapsed(sectionId);
  }

  dropDownItemsChildren: dropDownItems[] = [
    {
      title: 'Home',
      childrens: ['Home'],
      route: ['/'],
    },
    {
      title: 'All Courses',
      childrens: ['All Courses'],
      route: ['/all-courses'],
    },
    {
      title: 'Our projects',
      childrens: ['Our Projects'],
      route: ['/our-projects'],
    },
    {
      title: 'Blog',
      childrens: ['Blog'],
      route: ['/blog'],
    },
    {
      title: 'Contact',
      childrens: ['Contact'],
      route: ['/contact'],
    },
  ];
}
