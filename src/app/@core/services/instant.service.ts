import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { InstantResponse } from "../interfaces/instant-response";
import { map, catchError } from "rxjs/operators";
import { Instants } from "../models/instants";
import { Observable, throwError } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const baseURL = "http://10.254.46.189:8083/api/Template/";

@Injectable({
  providedIn: "root"
})
export class InstantService {
  constructor(private http: HttpClient) {}

  getAllInstants() {
    return this.http.get<InstantResponse>(baseURL + "GetAllInstants").pipe(
      map((response: InstantResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getAllActiveInstants() {
    return this.http
      .get<InstantResponse>(baseURL + "GetAllActiveInstants")
      .pipe(
        map((response: InstantResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getAllInstantsWithTypeTemplateQuery() {
    return this.http
      .get<InstantResponse>(
        baseURL + "GetAllInstantsWithTypeTemplateQuery",
        httpOptions
      )
      .pipe(
        map((response: InstantResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getAllActiveInstantsWithTypeTemplateQuery() {
    return this.http
      .get<InstantResponse>(
        baseURL + "GetAllActiveInstantsWithTypeTemplateQuery"
      )
      .pipe(
        map((response: InstantResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getInstantByIdFilter(params: Instants) {
    return this.http
      .post(baseURL + "GetInstantByIdFilter", params)
      .pipe(catchError(this.handleError));
  }

  getInstantByIdFilterWithTypeTemplateQuery(params: Instants) {
    return this.http
      .post(baseURL + "GetInstantByIdFilterWithTypeTemplateQuery", params)
      .pipe(catchError(this.handleError));
  }

  createInstant(params: Instants): Observable<InstantResponse> {
    return this.http
      .post<InstantResponse>(baseURL + "CreateInstant", params, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateInstant(params: Instants) {
    return this.http
      .post(baseURL + "UpdateInstant", params)
      .pipe(catchError(this.handleError));
  }

  deleteInstant(params: Instants) {
    return this.http
      .post(baseURL + "DeleteInstant", params)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error("---ERROR---" + error.message);
    return throwError("A data error occurred, please try again.");
  }
}
