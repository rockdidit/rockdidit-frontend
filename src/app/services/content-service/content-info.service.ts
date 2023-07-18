import { Injectable } from '@angular/core';
import { MainService } from '../main-services/main.service';

@Injectable({
  providedIn: 'root'
})
export class ContentInfoService {

  constructor(
    private mainService: MainService
  ) { }

    getWebImgs(id?: number | string){
      return new Promise((resolve, reject) => {
        this.mainService.getInfoComponents(`website-medias/${id ? id : ''}`).subscribe(
          (response: any) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }

  getWebSiteInformation(id?: number | string) {
    return new Promise((resolve, reject) => {
      this.mainService.getInfoComponents(`website-contents/${id ? id : ''}`).subscribe(
        (response: any) => {
          // console.log(response as any);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
