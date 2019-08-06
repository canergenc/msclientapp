import { Injectable } from '@angular/core';
import { ServiceBase } from '../interfaces/service-base';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TemplateResponse } from '../interfaces/template-response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
};
const URL = 'http://10.254.46.189:8083/api/Template/GetAllTemplatesWithTypes';

@Injectable({
  providedIn: 'root',
})
export class TemplateService implements ServiceBase {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<TemplateResponse>(URL).pipe(
      map((response: TemplateResponse) => {
        return response;
      }),
      catchError(this.handleError),
    );
  }
  add(item: any) {
    throw new Error('Method not implemented.');
  }
  delete(item: any) {
    throw new Error('Method not implemented.');
  }
  handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}
