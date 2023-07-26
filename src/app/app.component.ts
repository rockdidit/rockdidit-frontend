import { imgsResponseI } from './models/imgsResponseI';
import { AppProvider } from './providers/app-component/app.provider';
import { Component, OnInit } from '@angular/core';
import { ContentInfoService } from './services/content-service/content-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppProvider],
})
export class AppComponent implements OnInit {
  footerImgsInput: imgsResponseI[] = [];
  navMediaItems: string[] = [];
  footerLogo?: string;


  constructor(
    private appProvider: AppProvider,
    private contentService: ContentInfoService
  ) {}

  getLogoInfo(){
    this.navMediaItems.forEach((item, index) => {
      console.log(item)
      if(item.includes('logo.svg')){
        this.footerLogo = item;
        console.log(this.footerLogo);
      }
    })
  }

  getNavBarImgs() {
    const navBarUrls = [1, 25];
    navBarUrls.filter((nav: number) => {
      this.contentService.getWebImgs(nav).then(async (res: any) => {
        new Promise(async (resolve) => {
          resolve(res);
          const urlImgCarLogo = await res.data.attributes.url;
          this.navMediaItems.push(
            urlImgCarLogo
          )
        })
      });
    })
  }

  ngOnInit(): void {
    this.appProvider.getFooterImgs(this.footerImgsInput);
    this.getNavBarImgs();
    this.getLogoInfo();
  }
}
