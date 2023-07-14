import { Component, OnInit, Input } from '@angular/core';
import { iif } from 'rxjs';
import { ProjectsI } from 'src/app/models/projects-I';

@Component({
  selector: 'app-header-courses',
  templateUrl: './header-courses.component.html',
  styleUrls: ['./header-courses.component.scss'],
})
export class HeaderCoursesComponent implements OnInit {
  @Input() coursesArr?: ProjectsI[];

  main_title?: string[];

  ngOnInit(): void {}

  ngDoCheck() {
    if (
      this.coursesArr &&
      this.coursesArr.length > 0 &&
      this.coursesArr[0].main_title
    ) {
      this.main_title = this.coursesArr[0].main_title.split(' ');
    }
    if (this.coursesArr && this.coursesArr.length > 0) {
      this.coursesArr.forEach((item, index) => {
        if (
          index > 0 &&
          this.coursesArr &&
          this.coursesArr[index].title &&
          this.coursesArr.length > 0
        ) {
          const splitForTitle = this.coursesArr[index].title!.split(' ');
          this.courses[index - 1].title = splitForTitle;
        }
      });
    }
  }

  courses: any[] = [
    {
      title: [],
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-996182226.jpg',
    },
    {
      title: [],
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1063813258.jpg',
    },
    {
      title: [],
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1187422446.jpg',
    },
    {
      title: [],
      img: 'https://f7.vamtam.com/wp-content/uploads/2020/12/iStock-1248775871.jpg',
    },
  ];
}
