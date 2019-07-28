import { NgModule } from '@angular/core';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbActionsModule, NbButtonModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../../@theme/theme.module';
import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import { TemplateComponent } from './template/template.component';
import { QueryComponent } from './query/query.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbActionsModule,
    ThemeModule,
    MailRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    CKEditorModule,
    FormsModule,
  ],
  declarations: [
    MailComponent,
    TemplateComponent,
    QueryComponent,
  ],
})
export class MailModule { }
