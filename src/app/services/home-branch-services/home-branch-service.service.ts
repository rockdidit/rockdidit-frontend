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

  postAuthLocalRegister(registerUser: any) {
    return new Promise((resolve, reject) => {
      this.mainService.post(`auth/local/register`, registerUser).subscribe(
        (response: any) => {
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
