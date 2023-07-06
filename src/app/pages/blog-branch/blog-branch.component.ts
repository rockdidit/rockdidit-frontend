import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animations/animation.service';

@Component({
  selector: 'app-blog-branch',
  templateUrl: './blog-branch.component.html',
  styleUrls: ['./blog-branch.component.scss']
})
export class BlogBranchComponent implements OnInit {
  constructor(private animationService: AnimationService){
  }
  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element')
  }
}
