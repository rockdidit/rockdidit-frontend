import { Component, OnInit } from '@angular/core';
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

  webSiteInformationArr: any = [
    {
      courses: [],
    },
    {
      introduction: [],
    },
    {
      projects: [],
    },
    {
      events: [],
    },
    {
      buys: [],
    },
    {
      plans: [],
    },
  ];

  async ngOnInit() {
    this.animationService.scrollOpacityAnimation('fade-in-element');
    this.idArr.forEach(async (id, index) => {
      await this.contentInfoService
        .getWebSiteInformation(id)
        .then(async (item: any) => {
          const contentJson = item.data.attributes.content_JSON;
          this.pushContentJsonToWebsiteInformation(contentJson, index);
          // console.log(this.webSiteInformationArr);
        });
    });
  }

  pushContentJsonToWebsiteInformation(contentJson: any, index: number) {
    if (index === 0) {
      this.webSiteInformationArr[index].courses.push(contentJson['courses']);
    } else if (index === 1) {
      this.webSiteInformationArr[index].introduction.push(
        contentJson['introduction']
      );
    } else if (index === 2) {
      this.webSiteInformationArr[index].projects.push(contentJson['projects']);
    } else if (index === 3) {
      this.webSiteInformationArr[index].events.push(contentJson['events']);
    } else if (index === 4) {
      this.webSiteInformationArr[index].buys.push(contentJson['buys']);
    } else if (index === 5) {
      this.webSiteInformationArr[index].plans.push(contentJson['plans']);
    }
  }
}
