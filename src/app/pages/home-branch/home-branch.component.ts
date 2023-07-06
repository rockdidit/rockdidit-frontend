import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animations/animation.service';

@Component({
  selector: 'app-home-branch',
  templateUrl: './home-branch.component.html',
  styleUrls: ['./home-branch.component.scss']
})
export class HomeBranchComponent implements OnInit {
  constructor(private animationService: AnimationService){
  }
  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element')
  }
}
