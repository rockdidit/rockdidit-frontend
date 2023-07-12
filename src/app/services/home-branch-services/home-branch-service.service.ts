import { Injectable } from '@angular/core';
import { MainService } from '../main-services/main.service';

@Injectable({
  providedIn: 'root',
})

// Note that the name of the service is temporary
// since the methods integrated in it
// can be used in other components
export class HomeBranchServiceService {
  constructor(private mainService: MainService) {}

  /**
   * @param loginParams example parameters {
   *      "identifier": "foobar",
   *      "password": "Test1234"
   *    }
   * @param registerUser {
   *      "username": "foobar",
   *      "email": "foo.bar@strapi.io",
   *      "password": "Test1234"
   *     }
   *
   *  @param id: string | number
   *
   */

  pushContentJsonToWebsiteInformation(
    contentJson: any,
    index: number,
    webSiteInformationArr: any[]
  ): void {
    if (index === 0) {
      webSiteInformationArr[index].courses.push(contentJson['courses']);
    } else if (index === 1) {
      webSiteInformationArr[index].introduction.push(
        contentJson['introduction']
      );
    } else if (index === 2) {
      webSiteInformationArr[index].projects.push(contentJson['projects']);
    } else if (index === 3) {
      webSiteInformationArr[index].events.push(contentJson['events']);
    } else if (index === 4) {
      webSiteInformationArr[index].buys.push(contentJson['buys']);
    } else if (index === 5) {
      webSiteInformationArr[index].plans.push(contentJson['plans']);
    }
  }

  postAuthLocalRegister(registerUser: any) {
    return new Promise((resolve, reject) => {
      this.mainService.post(`auth/local/register`, registerUser).subscribe(
        (response: any) => {
          console.log(response as any);
          const res = response as any;
          const tokenId = res.jwt as string;
          this.mainService.setLocalStorageToken('id_token', tokenId);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  postAuthLocalLogin(loginParams: any) {
    return new Promise<any[]>((resolve, reject) => {
      this.mainService.post(`auth/local`, loginParams).subscribe(
        (response: any) => {
          console.log(response as any);
          const res = response as any;
          const tokenId = res.jwt as string;
          this.mainService.setLocalStorageToken('id_token', tokenId);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
