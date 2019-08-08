import { Templates } from "./templates";
import { Queries } from "./queries";
import { Types } from "./types";

export class Jobs {
  Id: number;
  Name: string;
  Description: string;
  TemplateId: number;
  QueryId: number;
  TypeId: number;
  StartDate: Date;
  EndDate: Date;
  Every: number;
  WhenSet: number;
  IsDeleted: boolean;
  CreatedBy: number;
  CreatedDate: Date;
  UpdatedBy: number;
  UpdatedDate: Date;
  TemplatesModel: Templates;
  QueriesModel: Queries;
  TypesModel: Types;
}
