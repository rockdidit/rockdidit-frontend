import { Component, Input } from '@angular/core';
import { AnimationService } from 'src/app/providers/animations/animation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() navMediaItems?: string[];
  carShopRenderBool: boolean = false;
  carShopImg?: string;
  logo?: string;
  constructor(private animationservice: AnimationService) {}

  ngDoCheck() {
    this.navBarOrdererVariables();
  }

  navBarOrdererVariables(){
    if (this.navMediaItems && this.navMediaItems.length > 0) {
      for(let i = 0 ; i < this.navMediaItems.length ; i ++){
        if(this.navMediaItems[i].includes('car_shop.svg')){
          this.carShopImg = this.navMediaItems[i];
        } else if(this.navMediaItems[i].includes('logo.svg')){
          this.logo = this.navMediaItems[i];
        }
      }
      this.carShopRenderBool = true;
    }
  }

  toggleAnimation() {
    this.animationservice.toggleAnimationDropDown();
  }
}
