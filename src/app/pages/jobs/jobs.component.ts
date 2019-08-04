import { Component, OnInit, TemplateRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  public query3 = '';
  public staticList = [
    "guitar",
    "drums",
    "bass",
    "electric guitars",
    "keyboards",
    "mic",
    "bass guitars",
    "trumpet",
    "horns",
    "guitar workshops",
    "pedals"
  ];

  settings = {
    actions: {
      position: 'right',
      add: true,
      edit: true,
      editable: false,
      columnTitle: '',
    },
    mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      template: {
        title: 'Template',
        type: 'string',
      },
      query: {
        title: 'Query',
        type: 'string',
      },
      startDate: {
        title: 'StartDate',
        type: 'string',
      },
      endDate: {
        title: 'EndDate',
        type: 'string',
      },
      every: {
        title: 'Every',
        type: 'string',
      },
      when: {
        title: 'When',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  model: any = {};
  cardName: any;
  date = new Date();
  constructor(private service: SmartTableData, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }
  ngOnInit() { }

  public handleStaticResultSelected (result) {
    this.query3 = result;
  }

  onCreateNewProcessor(dialog: TemplateRef<any>) {
    console.log(dialog);
    this.cardName = "Create New Job";
    this.model = {};
    this.dialogService.open(dialog);
  }
  onEditProcessor(event, dialog: TemplateRef<any>) {
    console.log(event);
    this.cardName = "Edit New Job";
    this.model.name = event.data.name;
    this.model.description = event.data.description;
    this.dialogService.open(dialog);
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
