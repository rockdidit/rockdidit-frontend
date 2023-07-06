import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animations/animation.service';

@Component({
  selector: 'app-all-courses-branch',
  templateUrl: './all-courses-branch.component.html',
  styleUrls: ['./all-courses-branch.component.scss']
})
export class AllCoursesBranchComponent implements OnInit {
  constructor(private animationService: AnimationService){
  }
  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element')
  }
}
