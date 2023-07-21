import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import ls from 'localstorage-slim';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  header: any;

  constructor(public http: HttpClient) {}

  /**
   * This function calls the backend to get all the objects from a specific route.
   * @param route The route the function will return the objects from.
   * @returns A HTTP response code and message.
   */
  getInfoComponents(route: string) {
    return this.http.get(`${environment.baseURL}/api/${route}`);
  }
  // get(route: string) {
  //   this.header = this.setHeader();
  //   return this.http.get(`${environment.baseURL}/api/${route}`, {
  //     headers: this.header,
  //   });
  // }

  /**
   * This function calls the backend to post an object of a type indicated in the route.
   * @param route The route the function will post the object to.
   * @param data The object the function will post.
   * @returns A HTTP response code and message.
   */
  post(route: string, data: any) {
    this.header = this.setHeader();
    return this.http.post(`${environment.baseURL}/api/${route}`, data, {
      headers: this.header,
    });
  }

  delete(route: string) {
    this.header = this.setHeader();
    return this.http.delete(`${environment.baseURL}/api/${route}`, {
      headers: this.header,
    });
  }

  /**
   * This function calls the backend to put an object of a type indicated in the route.
   * @param route The route the function will put the object to.
   * @param data The object the function will put.
   * @returns A HTTP response code and message.
   */
  put(route: string, data: any) {
    this.header = this.setHeader();
    return this.http.put(`${environment.baseURL}/api/${route}`, data, {
      headers: this.header,
    });
  }

  // /**
  //  * This function calls the backend to post an object and send an email, when query params are required.
  //  * @param route The route the function will post the object to.
  //  * @param data The object the function will post.
  //  * @param queryParams The query params needed in the request.
  //  * @returns A HTTP response code and message.
  //  */
  // postToEmailWithParams(route: string, data: any, queryParams: HttpParams) {
  //   this.header = this.setHeader();
  //   return this.http.post(`${environment.baseURL}/email/${route}`, data, { headers: this.header, params: queryParams });
  // }

  /**
   * This function calls the backend to post an object of a type indicated in the route, when query params are required.
   * @param route The route the function will post the object to.
   * @param data The object the function will post.
   * @param queryParams The query params needed in the request.
   * @returns A HTTP response code and message.
   */
  postWithParams(route: string, data: any, queryParams: HttpParams) {
    this.header = this.setHeader();
    return this.http.post(`${environment.baseURL}/api/${route}`, data, { headers: this.header, params: queryParams });
  }

  /**
   * This function calls the backend to get all the objects from a specific route, when query params are required.
   * @param route The route the function will return the objects from.
   * @param queryParams The query params needed in the request.
   * @returns A HTTP response code and message.
   */
  getWithParams(route: string, queryParams: HttpParams) {
    this.header = this.setHeader();
    return this.http.get(`${environment.baseURL}/api/${route}`, { headers: this.header, params: queryParams });
  }

  /**
   * This function sets the value of the headers needed to authorize the access for other functions.
   * @returns The token as the authorization header.
   */
  setLocalStorageToken(keyValue: string, value: string){
    ls.set(keyValue, value);
    const result = ls.get(keyValue);
    return;
  }

  setHeader() {
    const token = ls.get('id_token', {decrypt: true});
    return { Authorization: token };
  }
}
