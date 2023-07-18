import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.scss']
})
export class AllcoursesComponent {
  @Input() imgMailBox?: string;
}
