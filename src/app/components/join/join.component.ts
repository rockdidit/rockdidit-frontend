import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
  offerSelected: boolean[] = [false, false, false];

  selectOffer(index: number) {
    // Deseleccionar todos los elementos
    this.offerSelected = this.offerSelected.map(() => false);

    // Seleccionar el elemento específico
    this.offerSelected[index] = true;
  }
}
