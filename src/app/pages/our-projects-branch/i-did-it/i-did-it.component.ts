import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-i-did-it',
  templateUrl: './i-did-it.component.html',
  styleUrls: ['./i-did-it.component.scss']
})
export class IDidItComponent {

  @Input() title?: string = '';
  @Input() description?: string = '';

}
