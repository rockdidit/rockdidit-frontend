import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/providers/animations/animation.service';

@Component({
  selector: 'app-our-projects-branch',
  templateUrl: './our-projects-branch.component.html',
  styleUrls: ['./our-projects-branch.component.scss']
})
export class OurProjectsBranchComponent implements OnInit {
  constructor(private animationService: AnimationService){
  }
  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element')
  }
}
