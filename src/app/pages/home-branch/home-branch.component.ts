import { Component, OnInit } from '@angular/core';
import { ProjectsI } from 'src/app/models/projects-I';
import { AnimationService } from 'src/app/providers/animations/animation.service';
import { ContentInfoService } from 'src/app/services/content-service/content-info.service';

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

  idArr: number[] = [2, 1, 3, 4, 6, 5];
  courses: ProjectsI[] = [];
  introduction: ProjectsI[] = [];
  projects: ProjectsI[] = [];
  events: ProjectsI[] = [];
  buys: ProjectsI[] = [];
  plans: ProjectsI[] = [];

  async ngOnInit() {
    this.animationService.scrollOpacityAnimation('fade-in-element');
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
