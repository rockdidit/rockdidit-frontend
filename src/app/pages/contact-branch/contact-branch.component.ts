import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/animations/animation.service';

@Component({
  selector: 'app-contact-branch',
  templateUrl: './contact-branch.component.html',
  styleUrls: ['./contact-branch.component.scss'],
})
export class ContactBranchComponent implements OnInit {
  constructor(private animationService: AnimationService) {}
  ngOnInit(): void {
    this.animationService.scrollOpacityAnimation('fade-in-element');
  }
}
