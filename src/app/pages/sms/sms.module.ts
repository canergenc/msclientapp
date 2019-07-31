import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbActionsModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TemplateComponent } from './template/template.component';
import { QueryComponent } from './query/query.component';
import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ThemeModule,
    SmsRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    CKEditorModule,
    FormsModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbActionsModule
  ],
  declarations: [
    SmsComponent,
    TemplateComponent,
    QueryComponent,
  ],
})
export class SmsModule { }
