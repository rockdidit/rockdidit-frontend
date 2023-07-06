import { Component } from '@angular/core';
import { AnimationService } from 'src/app/services/animations/animation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private animationservice: AnimationService){
  }
  toggleAnimation() {
    this.animationservice.toggleAnimationDropDown();
  }
}
