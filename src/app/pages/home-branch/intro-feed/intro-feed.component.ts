import { Component } from '@angular/core';

interface introsModel{
  title: string;
  description: string;
  img: string;
  extra?: string;
}

@Component({
  selector: 'app-intro-feed',
  templateUrl: './intro-feed.component.html',
  styleUrls: ['./intro-feed.component.scss'],
})
export class IntroFeedComponent {
  intros: introsModel[] = [
    {
      title: 'MISSION',
      description:
        'Our purpose is to pass on empowering knowledge and training guidance in order to have a positive impact on the health and fitness of everyone we work with. To provide a personalised health and fitness service that unlocks every individuals true potential so they can achieve their desired goals.',
        img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1222239617.jpg'
      },
      {
        title: 'STORY',
        description:
        'Our main focus at rock did it Fitness is functional training because of the proven benefits. With an emphasis on mobility, strength, and conditioning, the benefits of functional training differ from other workouts because of the way it targets your body.',
        img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-500284593.jpg'
    },
    {
      title: 'APPROACH',
      description:
        'We are a hybrid gym and training facility. We have clean, state of the art facilities with the most knowledgeable staff and cutting-edge training methods. We offer open gym, team training, group classes, boxing, cycle and personal training.',
      extra: 'INOVATION + MOTIVATION = RESULTS',
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1225346230.jpg'
    },
  ];
}
