import { Injectable } from "@angular/core";
import { ServiceBase } from "../interfaces/service-base";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { TemplateResponse } from "../interfaces/template-response";
import { Templates } from "../models/templates";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const baseURL = "http://10.254.46.189:8083/api/Template/";

@Injectable({
  providedIn: "root"
})
export class TemplateService implements ServiceBase {
  constructor(private http: HttpClient) {}

  getAllTemplates() {
    return this.http.get<TemplateResponse>(baseURL + "GetAllTemplates").pipe(
      map((response: TemplateResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getAllActiveTemplates() {
    return this.http
      .get<TemplateResponse>(baseURL + "GetAllActiveTemplates")
      .pipe(
        map((response: TemplateResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getAllTemplatesWithTypes() {
    return this.http
      .get<TemplateResponse>(baseURL + "GetAllTemplatesWithTypes", httpOptions)
      .pipe(
        map((response: TemplateResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getAllActiveTemplatesWithTypes() {
    return this.http
      .get<TemplateResponse>(baseURL + "GetAllActiveTemplatesWithTypes")
      .pipe(
        map((response: TemplateResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getTemplateById(params: Templates) {
    return this.http
      .post(baseURL + "GetTemplateById", params)
      .pipe(catchError(this.handleError));
  }

  getAllTemplatesByTypeId(params: Templates) {
    return this.http
      .post(baseURL + "GetAllTemplatesByTypeId", params)
      .pipe(catchError(this.handleError));
  }

  getAllActiveTemplatesByTypeId(params: Templates) {
    return this.http
      .post(baseURL + "GetAllActiveTemplatesByTypeId", params)
      .pipe(catchError(this.handleError));
  }

  getTemplateWithTypeByTemplateId(params: Templates) {
    return this.http
      .post(baseURL + "GetTemplateWithTypeByTemplateId", params)
      .pipe(catchError(this.handleError));
  }

  createTemplate(params: Templates): Observable<TemplateResponse> {
    return this.http
      .post<TemplateResponse>(baseURL + "CreateTemplate", params, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateTemplate(params: Templates) {
    return this.http
      .post(baseURL + "UpdateTemplate", params)
      .pipe(catchError(this.handleError));
  }

  deleteTemplate(params: Templates) {
    return this.http
      .post(baseURL + "DeleteTemplate", params)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error("---ERROR---" + error.message);
    return throwError("A data error occurred, please try again.");
  }
}
