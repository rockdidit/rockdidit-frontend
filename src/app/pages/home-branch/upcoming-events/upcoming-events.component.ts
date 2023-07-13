import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
})
export class UpcomingEventsComponent implements OnInit{
  @Input() buysArr?: any[];
  @Input() eventsArr?: any[];

  ngOnInit(): void {
    // console.log(this.buysArr);
    // console.log(this.eventsArr);
  }

  events: any[] = [
    {
      date: '14 SEP.',
    },
    {
      date: '14 AUG.',
    },
  ];

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
