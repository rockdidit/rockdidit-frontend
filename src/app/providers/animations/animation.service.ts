import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {}
  collapsedSections: string[] = [];
  toggleCollapse(sectionId: string) {
    if (this.isCollapsed(sectionId)) {
      this.collapsedSections = this.collapsedSections.filter(
        (id) => id !== sectionId
      );
    } else {
      this.collapsedSections = [sectionId];
    }
  }

  isCollapsed(sectionId: string): boolean {
    return this.collapsedSections.includes(sectionId);
  }

  scrollOpacityAnimation(className: string) {
    const options = {
      threshold: 0.1,
    };
    const elements = document.querySelectorAll(`.${className}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    elements.forEach((element) => {
      observer.observe(element);
    });
  }

  toggleAnimationDropDown() {
    const element = document.getElementById('toggleContainer');
    element!.classList.toggle('active');
  }
}
