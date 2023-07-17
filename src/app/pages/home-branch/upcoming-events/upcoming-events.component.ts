import { Component, Input } from '@angular/core';

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
  buysElement?: buysModel;

  ngAfterContentChecked(): void {
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
  }

  events?: eventsModelI[];

  imgCarousel: any[] = [
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/brand6.webp?resize=120%2C120&ssl=1',
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/brand7.webp?resize=120%2C120&ssl=1',
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/brand3.webp?resize=120%2C120&ssl=1',
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/brand4.webp?resize=120%2C120&ssl=1',
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/brand2.webp?resize=120%2C120&ssl=1',
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/brand5.webp?resize=120%2C120&ssl=1',
    },
  ];
}
