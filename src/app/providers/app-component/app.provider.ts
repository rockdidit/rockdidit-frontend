import { Injectable } from '@angular/core';
import { imgsResponseI } from 'src/app/models/imgsResponseI';
import { ContentInfoService } from 'src/app/services/content-service/content-info.service';
@Injectable({
  providedIn: 'root',
})
export class AppProvider {
  constructor(public contentInfoService: ContentInfoService) {}

  getFooterImgs(footerImgsInput: imgsResponseI[]) {
    let footerImgsIndex = [5, 6, 7];
    try {
      for (let i of footerImgsIndex) {
        this.contentInfoService.getWebImgs(i).then((res: any) => {
          new Promise((resolve, reject) => {
            resolve(res);
            const response = res.data.attributes;
            footerImgsInput.push(response);
          });
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
}
