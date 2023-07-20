import { Component, Input } from '@angular/core';
import { imgsResponseI } from 'src/app/models/imgsResponseI';

type buysModel = {
  alert: string;
  main_title: string | string[];
  span: string;
};

type eventsModelI = {
  date: string[];
  description: string;
  title: string;
};
@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
})
export class UpcomingEventsComponent {
  @Input() buysArr?: any[];
  @Input() eventsArr?: any[];
  @Input() eventImgsCarousel?: imgsResponseI[];
  @Input() eventsImgsBook?: string;
  buysElement?: buysModel;
  events?: eventsModelI[];
  imgCarousel?: any[];
  imgBook?: string;

  ngAfterContentInit(): void {
    this.getAndSortArrangementsForCarouselImgs();
  }
  ngAfterContentChecked() {
    this.getAndSortArrangementsForText();
    this.getAndSortArrangementsForbookImg();
  }

  getAndSortArrangementsForbookImg() {
    new Promise((resolve, reject) => {
      resolve(this.imgBook);
      this.imgBook = this.eventsImgsBook;
    });
  }
  getAndSortArrangementsForCarouselImgs() {
    new Promise((resolve, reject) => {
      resolve(this.eventImgsCarousel);
      resolve(this.eventsImgsBook);
      if (this.eventImgsCarousel) {
        this.imgCarousel = this.eventImgsCarousel;
      }
    });
  }

  getAndSortArrangementsForText() {
    new Promise((resolve, reject) => {
      resolve(this.buysArr);
      resolve(this.eventsArr);
      if (
        this.buysArr &&
        this.eventsArr &&
        this.buysArr[0] &&
        this.eventsArr[0] &&
        this.eventsArr[0].length > 0 &&
        this.buysArr[0].length > 0
      ) {
        const auxEvent = this.eventsArr[0];
        this.events = [];
        this.events = auxEvent
          .filter((element: any, index: number) => index > 0)
          .map((element: any) => {
            if (typeof element.date === 'string') {
              element.date = element.date.split(' ');
            }
            return element;
          });

        const auxBuys = this.buysArr[0][0];
        this.buysElement = auxBuys;
        if (typeof this.buysElement?.main_title === 'string') {
          this.buysElement.main_title = this.buysElement.main_title.split(' ');
        }
      }
    });
  }
}
