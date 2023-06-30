import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rockdidit';

  visibleElements: any[] = [];

  ngOnInit() {
    const options = {
      threshold: 0.1, // Ajusta el valor según tus necesidades
    };

    const elements = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Agrega la clase "visible"
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => {
      observer.observe(element);
    });
  }
}
