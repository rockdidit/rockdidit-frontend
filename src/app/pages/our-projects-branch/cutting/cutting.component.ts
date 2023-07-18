import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cutting',
  templateUrl: './cutting.component.html',
  styleUrls: ['./cutting.component.scss'],
})
export class CuttingComponent {
  @Input() title?: string = '';
  @Input() description?: string = '';
  @Input() cuttingImg?: string;
}
