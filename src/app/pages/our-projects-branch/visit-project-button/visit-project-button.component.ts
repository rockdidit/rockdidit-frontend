import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visit-project-button',
  templateUrl: './visit-project-button.component.html',
  styleUrls: ['./visit-project-button.component.scss']
})
export class VisitProjectButtonComponent {
  @Input() buttonContent?: string;
  @Input() blackArrowToTheRight?: string;
}
