import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header-courses',
  templateUrl: './header-courses.component.html',
  styleUrls: ['./header-courses.component.scss'],
})
export class HeaderCoursesComponent implements OnInit {
  @Input() coursesArr?: any[] = [];
  ngOnInit() {
    console.log(this.coursesArr);
  }

  courses: any[] = [
    {
      title1: 'CONFERENCE',
      title2: 'CALL',
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-996182226.jpg',
    },
    {
      title1: 'TOOLS &',
      title2: 'TEMPLATES',
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1063813258.jpg',
    },
    {
      title1: 'CONSULTING',
      title2: 'MIND SPIRIT',
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1187422446.jpg',
    },
    {
      title1: 'MASTER MIND',
      title2: 'ALLIANCE',
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1248775871.jpg',
    },
  ];
}
