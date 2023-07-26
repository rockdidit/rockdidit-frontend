import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-natural-herb-mineral',
  templateUrl: './natural-herb-mineral.component.html',
  styleUrls: ['./natural-herb-mineral.component.scss'],
})
export class NaturalHerbMineralComponent {
  @Input() titleArr?: string[] = [];
  @Input() description?: string = '';
  @Input() naturalHerbMineralsImg?: string;
  @Input() blackArrowToTheRight?: string;
  @Input() diagonalArrowToTheRight?: string;
}
