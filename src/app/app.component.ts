import { imgsResponseI } from './models/imgsResponseI';
import { ContentInfoService } from './services/content-service/content-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rockdidit';
  footerImgsIndex: number[] = [5,6,7];
  footerImgsInput: imgsResponseI[] = [];
  constructor(private contentInfoService: ContentInfoService){
  }
  ngOnInit(): void {
    this.getFooterImgs();
  }

  getFooterImgs(){
    try{
      for(let i of this.footerImgsIndex){
        this.contentInfoService.getWebImgs(i).then((res: any)=> {
          new Promise((resolve, reject) => {
            resolve(res);
            const response = res.data.attributes;
            this.footerImgsInput.push(response);
          })
        })
      }
    } catch(err){
      console.error(err);
    }
  }


}
