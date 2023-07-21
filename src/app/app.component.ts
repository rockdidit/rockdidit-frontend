import { imgsResponseI } from './models/imgsResponseI';
import { AppProvider } from './providers/app-component/app.provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppProvider]
})
export class AppComponent implements OnInit{
  footerImgsIndex: number[] = [5,6,7];
  footerImgsInput: imgsResponseI[] = [];
  constructor(private appProvider: AppProvider){
  }
  ngOnInit(): void {
    this.appProvider.getFooterImgs(this.footerImgsIndex, this.footerImgsInput);
  }

}
