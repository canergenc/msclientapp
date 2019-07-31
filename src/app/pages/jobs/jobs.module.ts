import { NgModule } from '@angular/core';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbActionsModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { JobsComponent } from './jobs.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbActionsModule,
    Ng2SmartTableModule,
    NbButtonModule,
    CKEditorModule,
    FormsModule
  ],
  declarations: [
    JobsComponent,
  ],
})
export class JobsModule { }
