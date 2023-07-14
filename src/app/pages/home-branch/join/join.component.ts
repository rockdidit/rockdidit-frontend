import { Component, Input } from '@angular/core';

type passModel = {
  title: string;
  description: string;
  duration: string;
  span?: string;
};

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent {
  @Input() plansArr?: any[];

  passArr: passModel[] = [];
  main_title?: string[];
  followSpan: string[] = [];

  ngAfterContentChecked() {
    if (this.plansArr && this.plansArr[0] && this.plansArr[0].length > 0) {
      const planAux = this.plansArr[0];
      this.main_title = planAux[0].main_title.split(' ');
      planAux.forEach((item: any, index: number) => {
        if (index > 0 && index < 4) {
          this.passArr[index - 1] = item;
        } else if (index === 4) {
          this.followSpan = item.span.split(' ');
        }
      });
    }
  }

  offerSelected: boolean[] = [false, false, false];

  selectOffer(index: number) {
    this.offerSelected = this.offerSelected.map(() => false);
    this.offerSelected[index] = true;
  }
}
