import { Component, Input } from '@angular/core';
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
  main_title?: string;

  ngAfterContentChecked(): void {
    if (this.projArr && this.projArr[0] && this.projArr.length > 0) {
      const auxProj = this.projArr[0];
      auxProj.forEach((item: any, index: number) => {
        if (index === 0) {
          this.main_title = item.main_title;
        } else if(index > 0){
          this.projects[index - 1].title = item.title;
          this.projects[index - 1].detail = item.detail;
        }
      });
    }
  }

  projects: projectsModel[] = [
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/pexels-photo-1793035.jpeg?fit=1125%2C750&ssl=1',
      title: '',
      detail: '',
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/2fd4959c-b1ba-4bdc-b260-efbe2bbef135_image_jpeg.png?fit=800%2C800&ssl=1',
      title: '',
      detail: '',
    },
    {
      img: 'https://i0.wp.com/rockdidit.com/wp-content/uploads/2022/07/pexels-cottonbro-4761792-scaled.jpg?fit=1710%2C2560&ssl=1',
      title: '',
      detail: '',
    },
  ];
}
