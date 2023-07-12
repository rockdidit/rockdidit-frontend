import { HomeBranchServiceService } from './../../services/home-branch-services/home-branch-service.service';
import { ProjectsI } from '../../models/projects-I';
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
    private contentInfoService: ContentInfoService,
    private homeBranchServiceService: HomeBranchServiceService
  ) {}
  //2 1 3 4 6 5

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

  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element');

    this.idArr.forEach((id, index) => {
      this.contentInfoService.getWebSiteInformation(id).then((item: any) => {
        const contentJson = item.data.attributes.content_JSON;

        this.homeBranchServiceService.pushContentJsonToWebsiteInformation(contentJson, index, this.webSiteInformationArr);
      });
    });

    console.log(this.webSiteInformationArr);
  }
}
