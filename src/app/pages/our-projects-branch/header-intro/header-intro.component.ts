import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-intro',
  templateUrl: './header-intro.component.html',
  styleUrls: ['./header-intro.component.scss']
})
export class HeaderIntroComponent {
  @Input() main_title?: string = '';
  @Input() description?: string = '';
}
