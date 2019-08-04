import { NgModule } from '@angular/core';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbActionsModule, NbButtonModule, NbRadioModule, NbCalendarModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { JobsComponent } from './jobs.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';

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
    FormsModule,
    NbRadioModule,
    NgxTypeaheadModule,
    NbCalendarModule,
  ],
  declarations: [
    JobsComponent,
  ],
})
export class JobsModule { }
