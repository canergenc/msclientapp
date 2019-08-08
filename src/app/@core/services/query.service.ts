import { Injectable } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { QueryResponse } from "../interfaces/query-response";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Queries } from "../models/queries";
import { ServiceBase } from "../interfaces/service-base";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const baseURL = "http://10.254.46.189:8083/api/Query/";

@Injectable({
  providedIn: "root"
})
export class Querieservice implements ServiceBase {
  constructor(private http: HttpClient) {}

  getAllQueries() {
    return this.http.get<QueryResponse>(baseURL + "GetAllQueries").pipe(
      map((response: QueryResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getAllActiveQueries() {
    return this.http.get<QueryResponse>(baseURL + "GetAllActiveQueries").pipe(
      map((response: QueryResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getAllQueriesWithTypes() {
    return this.http
      .get<QueryResponse>(baseURL + "GetAllQueriesWithTypes", httpOptions)
      .pipe(
        map((response: QueryResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getAllActiveQueriesWithTypes() {
    return this.http
      .get<QueryResponse>(baseURL + "GetAllActiveQueriesWithTypes")
      .pipe(
        map((response: QueryResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getQueryById(params: Queries) {
    return this.http
      .post(baseURL + "GetQueryById", params)
      .pipe(catchError(this.handleError));
  }

  getAllQueriesByTypeId(params: Queries) {
    return this.http
      .post(baseURL + "GetAllQueriesByTypeId", params)
      .pipe(catchError(this.handleError));
  }

  getAllActiveQueriesByTypeId(params: Queries) {
    return this.http
      .post(baseURL + "GetAllActiveQueriesByTypeId", params)
      .pipe(catchError(this.handleError));
  }

  getQueryWithTypeByQueryId(params: Queries) {
    return this.http
      .post(baseURL + "GetQueryWithTypeByQueryId", params)
      .pipe(catchError(this.handleError));
  }

  createQuery(params: Queries): Observable<QueryResponse> {
    return this.http
      .post<QueryResponse>(baseURL + "CreateQuery", params, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateQuery(params: Queries) {
    return this.http
      .post(baseURL + "UpdateQuery", params)
      .pipe(catchError(this.handleError));
  }

  deleteQuery(params: Queries) {
    return this.http
      .post(baseURL + "DeleteQuery", params)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error("---ERROR---" + error.message);
    return throwError("A data error occurred, please try again.");
  }
}
