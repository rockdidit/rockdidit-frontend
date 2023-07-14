import { Component, Input } from '@angular/core';

type introsModel = {
  title?: string;
  description?: string;
  img?: string;
  subtitle?: string;
};

type spanWithoutIterations = {
  title?: string | string[];
  span?: string;
  description?: string;
};

@Component({
  selector: 'app-intro-feed',
  templateUrl: './intro-feed.component.html',
  styleUrls: ['./intro-feed.component.scss'],
})
export class IntroFeedComponent {
  @Input() introArr?: any[];

  main_title?: string[] = [];
  renderSomeStrings: boolean = false;

  ngAfterContentChecked(): void {
    if (this.introArr && this.introArr[0] && this.introArr[0].length > 0) {
      this.main_title = this.introArr[0][0].main_title.split(' ');
      this.introArr[0].forEach((item: object | any, index: number) => {
        if (index >= 1 && index <= 3) {
          this.intros[index - 1].title = item.title;
          this.intros[index - 1].description = item.description;
          if (item.subtitle) {
            this.intros[index - 1].subtitle = item.subtitle;
          }
        }
        if (index === 3) {
          this.spanWithoutIterations[0].span = item.span;
        } else if (index === 4) {
          const aux = this.spanWithoutIterations[1];
          aux.span = item.span;
          aux.description = item.description;
          aux.title = item.title;
        } else if (index === 5) {
          const aux = this.spanWithoutIterations[2];
          aux.span = item.span;
          aux.title = item.title.split(" ");
        }
      });
      this.renderSomeStrings = true;
    }
  }

  spanWithoutIterations: spanWithoutIterations[] = [
    {
      span: '',
    },
    {
      description: '',
      span: '',
      title: '',
    },
    {
      title: [],
      span: '',
    },
  ];

  intros: introsModel[] = [
    {
      title: '',
      description: '',
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1222239617.jpg',
    },
    {
      title: '',
      description: '',
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-500284593.jpg',
    },
    {
      title: '',
      description: '',
      subtitle: '',
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1225346230.jpg',
    },
  ];
  // intros: introsModel[] = [
  //   {
  //     title: 'MISSION',
  //     description:
  //       'Our purpose is to pass on empowering knowledge and training guidance in order to have a positive impact on the health and fitness of everyone we work with. To provide a personalised health and fitness service that unlocks every individuals true potential so they can achieve their desired goals.',
  //     img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1222239617.jpg',
  //   },
  //   {
  //     title: 'STORY',
  //     description:
  //       'Our main focus at rock did it Fitness is functional training because of the proven benefits. With an emphasis on mobility, strength, and conditioning, the benefits of functional training differ from other workouts because of the way it targets your body.',
  //     img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-500284593.jpg',
  //   },
  //   {
  //     title: 'APPROACH',
  //     description:
  //       'We are a hybrid gym and training facility. We have clean, state of the art facilities with the most knowledgeable staff and cutting-edge training methods. We offer open gym, team training, group classes, boxing, cycle and personal training.',
  //     subtitle: 'INOVATION + MOTIVATION = RESULTS',
  //     img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1225346230.jpg',
  //   },
  // ];
}
