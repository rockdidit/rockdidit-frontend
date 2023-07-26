import { Component, Input } from '@angular/core';
import { imgsResponseI } from 'src/app/models/imgsResponseI';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
  @Input() footerImgsInput?: imgsResponseI[];
  @Input() footerLogo?: string;
  constructor(){
  }

  ngAfterContentChecked() {
    new Promise((resolve) => {
      resolve(this.footerImgsInput && this.footerLogo);
    })
  }
}
