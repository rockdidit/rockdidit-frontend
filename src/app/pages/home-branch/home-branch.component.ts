import { Component, OnInit } from '@angular/core';
import { ProjectsI } from 'src/app/models/projects-I';
import { AnimationService } from 'src/app/providers/animations/animation.service';
import { ContentInfoService } from 'src/app/services/content-service/content-info.service';
import { imgsResponseI } from 'src/app/models/imgsResponseI';

@Component({
  selector: 'app-home-branch',
  templateUrl: './home-branch.component.html',
  styleUrls: ['./home-branch.component.scss'],
  providers: [],
})
export class HomeBranchComponent implements OnInit {
  constructor(
    private animationService: AnimationService,
    private contentInfoService: ContentInfoService
  ) {}

  // imgs id's in order.
  idArr: number[] = [2, 1, 3, 4, 6, 5];
  courses: ProjectsI[] = [];
  coursesImgIndex: number[] = [11, 10, 9, 8];
  coursesImgs: imgsResponseI[] = [];
  introduction: ProjectsI[] = [];
  introductionImgIndex: number[] = [12, 13, 14];
  introductionImgs: imgsResponseI[] = [];
  projects: ProjectsI[] = [];
  projectsImgIndex: number[] = [4, 15, 16];
  projectsImgs: imgsResponseI[] = [];
  events: ProjectsI[] = [];
  eventsImgBookIndex: number[] = [2];
  eventsImgsBook?: string;
  eventImgsCarouselIndex: number[] = [17, 18, 19, 20, 21, 22];
  eventImgsCarousel: imgsResponseI[] = [];
  buys: ProjectsI[] = [];
  buysImgIndex: number[] = [];
  buysImgs: imgsResponseI[] = [];
  plans: ProjectsI[] = [];
  plansImgsIndex: number[] = [];
  plansImgs: imgsResponseI[] = [];

  async ngOnInit() {
    try {
      this.animationService.scrollOpacityAnimation('fade-in-element');
      await this.pushNecessaryComponentsInformation();
      await this.addCoursesImgsAndInputByComponent();
      await this.addIntroductionImgArr();
      await this.addProjImgs();
      await this.addUpcomingEventsImgs();
    } catch (err) {
      console.log(err);
    }
  }

  async addUpcomingEventsImgs() {
    try {
      for (let i of this.eventImgsCarouselIndex) {
        await this.contentInfoService.getWebImgs(i).then((data: any) => {
          const res = data.data.attributes;
          this.eventImgsCarousel.push(res);
        });
      }
      await this.contentInfoService
        .getWebImgs(this.eventsImgBookIndex[0])
        .then((data: any) => {
          const res = data.data.attributes;
          this.eventsImgsBook = res.url;
        });
    } catch (err) {
      console.error(err);
    }
  }

  async addProjImgs() {
    try {
      for (let i of this.projectsImgIndex) {
        await this.contentInfoService.getWebImgs(i).then(async (res: any) => {
          const response = await res.data.attributes;
          this.projectsImgs.push(response);
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async addIntroductionImgArr() {
    try {
      for (let i of this.introductionImgIndex) {
        await this.contentInfoService.getWebImgs(i).then(async (res: any) => {
          const response = await res.data.attributes;
          this.introductionImgs.push(response);
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async pushNecessaryComponentsInformation() {
    this.idArr.forEach(async (id, index) => {
      await this.contentInfoService
        .getWebSiteInformation(id)
        .then(async (item: any) => {
          try {
            const contentJson = item.data.attributes.content_JSON;
            this.pushContentJsonToWebsiteInformation(contentJson, index);
          } catch (err) {
            console.error(err);
          }
        });
    });
  }

  async addCoursesImgsAndInputByComponent() {
    for (const item of this.coursesImgIndex) {
      try {
        await this.contentInfoService.getWebImgs(item).then((response: any) => {
          const res = response.data.attributes;
          if (res) {
            this.coursesImgs.push(res);
          }
        });
      } catch (err) {
        console.error(err);
      }
    }
    this.coursesImgs.reverse();
  }

  pushContentJsonToWebsiteInformation(contentJson: any, index: number) {
    if (index === 0) {
      contentJson['courses'].filter((item: any) => this.courses.push(item));
    } else if (index === 1) {
      this.introduction.push(contentJson['introduction']);
    } else if (index === 2) {
      this.projects.push(contentJson['projects']);
    } else if (index === 3) {
      this.events.push(contentJson['events']);
    } else if (index === 4) {
      this.buys.push(contentJson['buys']);
    } else if (index === 5) {
      this.plans.push(contentJson['plans']);
    }
  }
}
