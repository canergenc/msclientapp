import { Jobs } from '../models/jobs';

export interface JobResponse {
    jobsListModel: Jobs[];
    jobsModel: Jobs;
}