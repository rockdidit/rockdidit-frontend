import { Component } from '@angular/core';
import { AnimationService } from 'src/app/providers/animations/animation.service';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [ AnimationService]
})
export class DropdownComponent {
  constructor(private animationService: AnimationService){

  }
  collapsedSections: string[] = [];

  toggleCollapse(sectionId: string) {
    this.animationService.toggleCollapse(sectionId);
  }

  isCollapsed(sectionId: string): boolean {
    return this.animationService.isCollapsed(sectionId);
  }

  dropDownItemsChildren: any[] = [
    {
      title: 'Home',
      childrens: ['Home', 'Personal Trainer'],
    },
    {
      title: 'Classes',
      childrens: [
        'Outdoor Classes',
        'E-BOOk Updated',
        'Conference Calls',
        'Personal Training',
        'View All',
      ],
    },
    {
      title: 'Membership',
    },
    {
      title: 'About',
      childrens: [
        'F7 Club',
        'Team',
        'Reviews',
        'Contact',
        'Schedules',
        'Covid-19',
      ],
    },
    {
      title: 'Community',
      childrens: ['Blog', 'Our Projects'],
    },
    { title: 'Shop' },
  ];
}
