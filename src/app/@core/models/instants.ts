import { Templates } from "./templates";
import { Queries } from "./queries";
import { Types } from "./types";

export class Instants {
  Id: number;
  TypeId: number;
  TemplateId: number;
  QueryId: number;
  IsDeleted: boolean;
  CreatedBy: number;
  CreatedDate: Date;
  UpdatedBy: number;
  UpdatedDate: Date;
  TemplatesModel: Templates;
  QueriesModel: Queries;
  TypesModel: Types;
}
