import { Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss']
})
export class OurProjectsComponent {
  // constructor(private elementRef: ElementRef) {}
  // ngOnInit() {
  //   const options = {
  //     threshold: 0.1, // Ajusta el valor según tus necesidades
  //   };

  //   const elements = this.elementRef.nativeElement.querySelectorAll('.fade-in-element');
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('visible'); // Agrega la clase "visible"
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, options);

  //   elements.forEach((element: any) => {
  //     observer.observe(element);
  //   });
  // }
  projects: any[] = [
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/pexels-photo-1793035.jpeg?fit=1125%2C750&ssl=1',
      title: 'HERBS',
      price: '1680$/6MO'
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/2fd4959c-b1ba-4bdc-b260-efbe2bbef135_image_jpeg.png?fit=800%2C800&ssl=1',
      title: 'CUTTING',
      price: '1000$'
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/pexels-cottonbro-4761792-scaled.jpg?fit=1710%2C2560&ssl=1',
      title: 'I DID IT',
      price: '100$/HR'
    }
  ]
}
