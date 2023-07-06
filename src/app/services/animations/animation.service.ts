import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  scrollOpacityAnimation(className: string){
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

}
