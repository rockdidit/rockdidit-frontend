import { Component, Input, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/providers/animations/animation.service';
import { ContentInfoService } from 'src/app/services/content-service/content-info.service';

@Component({
  selector: 'app-contact-branch',
  templateUrl: './contact-branch.component.html',
  styleUrls: ['./contact-branch.component.scss'],
})
export class ContactBranchComponent implements OnInit {
  constructor( private animationService: AnimationService, private contentInfoService: ContentInfoService) {
  }
  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element');
  }

}
