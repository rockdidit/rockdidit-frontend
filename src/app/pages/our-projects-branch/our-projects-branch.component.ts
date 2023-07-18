import { ContentInfoService } from './../../services/content-service/content-info.service';
import { Component, OnInit } from '@angular/core';
import { ProjectsI } from 'src/app/models/projects-I';
import { AnimationService } from 'src/app/providers/animations/animation.service';

@Component({
  selector: 'app-our-projects-branch',
  templateUrl: './our-projects-branch.component.html',
  styleUrls: ['./our-projects-branch.component.scss'],
})
export class OurProjectsBranchComponent implements OnInit {
  constructor(
    private animationService: AnimationService,
    private contentInfoService: ContentInfoService
  ) {}

  dataBranch?: any;
  imgIndex: number[] = [3, 4, 23];

  headerIntroInfo: ProjectsI = {
    main_title: '',
    description: '',
  };

  iDidIt: ProjectsI = {
    title: '',
    description: '',
  };
  iDidItImg?: string;

  naturalHerbsMinerals: ProjectsI = {
    titleArr: [],
    description: '',
  };
  naturalHerbMineralsImg?: string;

  cutting: ProjectsI = {
    title: '',
    description: '',
  };
  cuttingImg?: string;
  upComingEvents: ProjectsI = {
    titleArr: [],
    description: '',
  };
  obtainBookImg?: string;
  getAndSortArraysforText() {
    this.contentInfoService.getWebSiteInformation(7).then((item: any) => {
      const content_json = item.data.attributes.content_JSON;
      const contentProjects = content_json.projects;
      this.headerIntroInfo.description = contentProjects[0].description;
      this.headerIntroInfo.main_title = contentProjects[0].main_title;
      this.iDidIt.title = contentProjects[1].title;
      this.iDidIt.description = contentProjects[1].description;
      this.naturalHerbsMinerals.titleArr = contentProjects[2].title.split(' ');
      this.naturalHerbsMinerals.description = contentProjects[2].description;
      this.cutting.title = contentProjects[3].title;
      this.cutting.description = contentProjects[3].description;
    });
  }

  obtainBookImgAndLogic(){
    this.contentInfoService.getWebImgs(2).then((res: any) => {
      const response = res.data.attributes.url;
      new Promise((resolve, reject) => {
        resolve(res)
        this.obtainBookImg = response;
      })
    })
  }
  obtainAndExportImgs(){
    for(let i = 0 ; i < this.imgIndex.length ; i ++){
      this.contentInfoService.getWebImgs(this.imgIndex[i]).then((imgs: any) => {
        new Promise((resolve, reject) => {
          resolve(imgs);
          const response = imgs.data.attributes.url;
          if(this.imgIndex[i] === 3){
            this.iDidItImg = response;
          } else if( this.imgIndex[i] === 4){
            this.naturalHerbMineralsImg = response;
          } else if(this.imgIndex[i] ===23){
            this.cuttingImg = response;
          }
        })
      })
    }
  }

  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element');
    this.getAndSortArraysforText();
    this.obtainAndExportImgs();
    this.obtainBookImgAndLogic();
  }
}
