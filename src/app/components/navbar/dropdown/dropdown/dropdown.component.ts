import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  collapsedSections: string[] = [];

  toggleCollapse(sectionId: string) {
    if (this.isCollapsed(sectionId)) {
      this.collapsedSections = this.collapsedSections.filter(
        (id) => id !== sectionId
      );
    } else {
      this.collapsedSections.push(sectionId);
    }
  }

  isCollapsed(sectionId: string): boolean {
    return this.collapsedSections.includes(sectionId);
  }

  dropDownItemsChildren: any[] = [
    {
      title: 'Home',
      childrens: [
        "home",
        "personal trainer"
      ]
    },
    {
      title: 'Classes',
      childrens: [
        "Outdoor Classes",
        "E-BOOk Updated",
        "Conference Calls",
        "Personal Training",
        "View All"
      ]
    }
  ]
}
