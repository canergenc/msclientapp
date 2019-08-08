import { Injectable } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { TypeResponse } from "../interfaces/type-response";
import { map, catchError } from "rxjs/operators";
import { Types } from "../models/types";
import { Observable, throwError } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const baseURL = "http://10.254.46.189:8083/api/Type/";

@Injectable({
  providedIn: "root"
})
export class TypeService {
  constructor(private http: HttpClient) {}

  getAllTypes() {
    return this.http.get<TypeResponse>(baseURL + "GetAllTypes").pipe(
      map((response: TypeResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getAllActiveTypes() {
    return this.http.get<TypeResponse>(baseURL + "GetAllActiveTypes").pipe(
      map((response: TypeResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getTypeById(params: Types) {
    return this.http
      .post(baseURL + "GetTypeById", params)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error("---ERROR---" + error.message);
    return throwError("A data error occurred, please try again.");
  }
}
