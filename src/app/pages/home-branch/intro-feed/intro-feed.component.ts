import { Component, Input } from '@angular/core';
import { imgsResponseI } from 'src/app/models/imgsResponseI';

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
  @Input() introImgs?: imgsResponseI[];
  @Input() arrowToTheRight?: string;

  main_title?: string[] = [];
  renderSomeStrings: boolean = false;

  ngAfterContentChecked(): void {
    this.obtainItemsForOnlyText();
    this.obtainItemsForOnlyImgs();
  }

  obtainItemsForOnlyImgs() {
    new Promise((resolve, reject) => {
      resolve(this.introImgs);
      if (this.introImgs && this.introImgs.length > 0) {
        for (let i = 0; i < this.intros.length; i++) {
          this.intros[i].img = this.introImgs[i].url;
        }
      }
    });
  }
  obtainItemsForOnlyText() {
    new Promise((resolve, reject) => {
      resolve(this.introArr);
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
            aux.title = item.title.split(' ');
          }
        });
        this.renderSomeStrings = true;
      }
    });
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
      img: '',
    },
    {
      title: '',
      description: '',
      img: '',
    },
    {
      title: '',
      description: '',
      subtitle: '',
      img: '',
    },
  ];
}
