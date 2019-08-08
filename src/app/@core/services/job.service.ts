import { Injectable } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { JobResponse } from "../interfaces/job-response";
import { map, catchError } from "rxjs/operators";
import { Jobs } from "../models/jobs";
import { Observable, throwError } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const baseURL = "http://10.254.46.189:8083/api/Job/";

@Injectable({
  providedIn: "root"
})
export class JobService {
  constructor(private http: HttpClient) {}

  getAllJobs() {
    return this.http.get<JobResponse>(baseURL + "GetAllJobs").pipe(
      map((response: JobResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getAllActiveJobs() {
    return this.http.get<JobResponse>(baseURL + "GetAllActiveJobs").pipe(
      map((response: JobResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getAllJobsWithTypeQueryTemplate() {
    return this.http
      .get<JobResponse>(
        baseURL + "GetAllJobsWithTypeQueryTemplate",
        httpOptions
      )
      .pipe(
        map((response: JobResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getAllActiveJobsWithTypeQueryTemplate() {
    return this.http
      .get<JobResponse>(baseURL + "GetAllActiveJobsWithTypeQueryTemplate")
      .pipe(
        map((response: JobResponse) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getAllJobsByTypeId(params: Jobs) {
    return this.http
      .post(baseURL + "GetAllJobsByTypeId", params)
      .pipe(catchError(this.handleError));
  }

  getAllActiveJobsByTypeId(params: Jobs) {
    return this.http
      .post(baseURL + "GetAllActiveJobsByTypeId", params)
      .pipe(catchError(this.handleError));
  }

  getAllJobsByTemplateId(params: Jobs) {
    return this.http
      .post(baseURL + "GetAllJobsByTemplateId", params)
      .pipe(catchError(this.handleError));
  }

  getAllActiveJobsByTemplateId(params: Jobs) {
    return this.http
      .post(baseURL + "GetAllActiveJobsByTemplateId", params)
      .pipe(catchError(this.handleError));
  }

  getAllJobsQueryId(params: Jobs) {
    return this.http
      .post(baseURL + "GetAllJobsQueryId", params)
      .pipe(catchError(this.handleError));
  }

  getAllActiveJobsQueryId(params: Jobs) {
    return this.http
      .post(baseURL + "GetAllActiveJobsQueryId", params)
      .pipe(catchError(this.handleError));
  }

  getJobsWithFilters(params: Jobs) {
    return this.http
      .post(baseURL + "GetJobsWithFilters", params)
      .pipe(catchError(this.handleError));
  }

  getJobById(params: Jobs) {
    return this.http
      .post(baseURL + "GetJobById", params)
      .pipe(catchError(this.handleError));
  }

  getJobByTypeId(params: Jobs) {
    return this.http
      .post(baseURL + "GetJobByTypeId", params)
      .pipe(catchError(this.handleError));
  }

  getJobByTemplateId(params: Jobs) {
    return this.http
      .post(baseURL + "GetJobByTemplateId", params)
      .pipe(catchError(this.handleError));
  }

  getJobQueryId(params: Jobs) {
    return this.http
      .post(baseURL + "GetJobQueryId", params)
      .pipe(catchError(this.handleError));
  }

  createJob(params: Jobs): Observable<JobResponse> {
    return this.http
      .post<JobResponse>(baseURL + "CreateJob", params, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateJob(params: Jobs) {
    return this.http
      .post(baseURL + "UpdateJob", params)
      .pipe(catchError(this.handleError));
  }

  deleteJob(params: Jobs) {
    return this.http
      .post(baseURL + "DeleteJob", params)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error("---ERROR---" + error.message);
    return throwError("A data error occurred, please try again.");
  }
}
