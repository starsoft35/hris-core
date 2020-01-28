import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as _ from 'lodash';
import { appConfig } from '../../../assets/config/config';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  getLoginAccess(userInfo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Accept': '*/*' ,
      'Access-Control-Allow-Origin': appConfig.url
      })
    };
    // const url = appConfig.url + 'auth/login';
    const url = '../api/me';
    return this.httpClient.post(url, userInfo, httpOptions);
  }

  getUserInfo(userInfo): Observable<any> {
    const token = btoa(userInfo.username + ':' + userInfo.password);
    const httpOptions = {
      headers: new HttpHeaders({
      'Accept': '*/*' ,
      'Access-Control-Allow-Origin': '*',
      'authorization': 'Basic ' + token
      })
    };
    const url = '../../api/me';
    return this.httpClient.get(url, httpOptions);
  }

}
