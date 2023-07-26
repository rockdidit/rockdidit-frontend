import { Component, Input } from '@angular/core';
import { imgsResponseI } from 'src/app/models/imgsResponseI';
type projectsModel = {
  img: string;
  title: string;
  detail?: string;
};

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
})
export class OurProjectsComponent {
  @Input() projArr?: any[];
  @Input() projImgs?: imgsResponseI[];
  @Input() arrowToTheRight?: string;
  main_title?: string;

  ngAfterContentChecked(): void {
    this.placementOfTextOfProjArr();
    this.placementOfImgsOfProjImgs();
  }

  placementOfImgsOfProjImgs() {
    new Promise((resolve, reject) => {
      resolve(this.projImgs);
      resolve(this.projArr);
      if (this.projects && this.projImgs && this.projImgs.length > 0) {
        for (let i = 0; i < this.projects.length; i++) {
          this.projects[i].img = this.projImgs[i].url;
        }
      }
    });
  }

  placementOfTextOfProjArr() {
    new Promise((resolve, reject) => {
      resolve(this.projArr);
      if (this.projArr && this.projArr[0] && this.projArr.length > 0) {
        const auxProj = this.projArr[0];
        auxProj.forEach((item: any, index: number) => {
          if (index === 0) {
            this.main_title = item.main_title;
          } else if (index > 0) {
            this.projects[index - 1].title = item.title;
            this.projects[index - 1].detail = item.detail;
          }
        });
      }
    });
  }

  projects: projectsModel[] = [
    {
      img: '',
      title: '',
      detail: '',
    },
    {
      img: '',
      title: '',
      detail: '',
    },
    {
      img: '',
      title: '',
      detail: '',
    },
  ];
}
