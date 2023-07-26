import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/providers/animations/animation.service';
import { ContentInfoService } from 'src/app/services/content-service/content-info.service';

@Component({
  selector: 'app-all-courses-branch',
  templateUrl: './all-courses-branch.component.html',
  styleUrls: ['./all-courses-branch.component.scss'],
})
export class AllCoursesBranchComponent implements OnInit {
  constructor(
    private animationService: AnimationService,
    private contentInfoService: ContentInfoService
  ) {}
  readonly imgIndex: number[] = [24];
  imgMailBox?: string;

  getWebImgs(){
    this.contentInfoService.getWebImgs(this.imgIndex[0]).then((item: any) => {
      new Promise((resolve) => {
        resolve(item);
        const img = item.data.attributes.url;
        this.imgMailBox = img;
      })
    })
  }
  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element');
    this.getWebImgs();
  }
}
