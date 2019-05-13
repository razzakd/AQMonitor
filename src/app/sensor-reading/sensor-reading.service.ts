import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
@Injectable()

export class SensorReadingService extends BaseService {
  constructor(public http: HttpClient) {
    super(http);
  }

  GetUserData(fileName: string): Observable<any> {
    let params = new HttpParams().set('fileName', fileName);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
    return this.http.get<any>(this.raspberry_url + 'getUserData', { headers: headers, params: params });
  }
}
