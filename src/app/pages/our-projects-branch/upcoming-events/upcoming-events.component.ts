import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
})
export class UpcomingEventsComponent {

  @Input() titleArr: string[] = [];
  @Input() decription: string = "";
  @Input() obtainBookImg?: string;
  @Input() blackArrowToTheRight?: string;
}
