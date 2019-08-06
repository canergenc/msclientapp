import { Component, OnInit, TemplateRef } from "@angular/core";

import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { NbDialogService } from "@nebular/theme";
import "../../ckeditor.loader";
import "ckeditor";
import { TemplateService } from "../../../@core/services/template.service";
import { TemplateResponse } from "../../../@core/interfaces/template-response";
import { Templates } from "../../../@core/models/templates";

@Component({
  selector: "ngx-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"]
})
export class TemplateComponent implements OnInit {
  templateList: Templates[];

  settings = {
    actions: {
      position: "right",
      add: true,
      edit: true,
      editable: false,
      columnTitle: ""
    },
    mode: "external",
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: "ID",
        type: "number"
      },
      name: {
        title: "Name",
        type: "string"
      },
      description: {
        title: "Description",
        type: "string"
      },
      username: {
        title: "CreatedBy",
        type: "string"
      },
      email: {
        title: "CreatedDate",
        type: "date"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  model: any = {};
  cardName: any;
  constructor(
    private service: SmartTableData,
    private dialogService: NbDialogService,
    private templateService: TemplateService
  ) {
    const data = this.service.getData();
    this.source.load(data);
  }
  ngOnInit() {
    this.createTemplate();
    this.fetchAllData();
    console.log(this.templateList);

  }

  onCreateNewProcessor(dialog: TemplateRef<any>) {
    console.log(dialog);
    this.cardName = "Create New Mail Template";
    this.model = {};
    this.dialogService.open(dialog);
  }
  onEditProcessor(event, dialog: TemplateRef<any>) {
    console.log(event);
    this.cardName = "Edit New Mail Template";
    this.model.name = event.data.name;
    this.model.description = event.data.description;
    this.dialogService.open(dialog);
  }
  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  fetchAllData() {
    this.templateService.getAllTemplatesWithTypes().subscribe(templates => {
      this.templateList = templates.templatesListModel;
      console.log(this.templateList);
    });
  }

  createTemplate() {
    const params = new Templates();
    params.Name = "Can MERCAN";
    params.Description = "Bir markadır.";
    params.IsDeleted = false;
    params.TypeId = 1;
    this.templateService.createTemplate(params).subscribe(templates => {
      console.log('success');
    });
  }
}
