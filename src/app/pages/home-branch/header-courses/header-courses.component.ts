import { Component, OnInit, Input } from '@angular/core';
import { iif } from 'rxjs';
import { imgsResponseI } from 'src/app/models/imgsResponseI';
import { ProjectsI } from 'src/app/models/projects-I';
type coursesInfo = {
  title: string[];
  img: string;
};
@Component({
  selector: 'app-header-courses',
  templateUrl: './header-courses.component.html',
  styleUrls: ['./header-courses.component.scss'],
})
export class HeaderCoursesComponent implements OnInit {
  @Input() coursesArr?: ProjectsI[];
  @Input() coursesImgs?: imgsResponseI[];
  main_title?: string[];
  courses: coursesInfo[] = [];
  ngOnInit(): void {}

  ngDoCheck() {
    this.addMainTitleInformation();
    this.addImgsAndCoursesInfo();
  }

  async addImgsAndCoursesInfo() {
    if (this.coursesArr && this.coursesArr.length > 0) {
      this.coursesArr.forEach((item, index) => {
        if (
          index > 0 &&
          this.coursesArr &&
          this.coursesArr[index].title &&
          this.coursesArr.length > 0
        ) {
          const splitForTitle = this.coursesArr[index].title!.split(' ');
          this.courses[index - 1] = { title: splitForTitle, img: '' };
          if (this.coursesImgs && this.coursesImgs[index - 1]) {
            this.courses[index - 1].img = this.coursesImgs[index - 1]?.url;
          }
        }
      });
    }
  }
  async addMainTitleInformation() {
    if (
      this.coursesArr &&
      this.coursesArr.length > 0 &&
      this.coursesArr[0].main_title
    ) {
      this.main_title = this.coursesArr[0].main_title.split(' ');
    }
  }
}
