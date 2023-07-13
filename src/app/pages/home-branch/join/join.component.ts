import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit{
  @Input() plansArr?: any[];

  ngOnInit() {
    // console.log(this.plansArr)
  }

  offerSelected: boolean[] = [false, false, false];

  selectOffer(index: number) {
    this.offerSelected = this.offerSelected.map(() => false);
    this.offerSelected[index] = true;
  }
}
