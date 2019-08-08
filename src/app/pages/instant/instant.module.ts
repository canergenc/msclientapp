import { NgModule } from '@angular/core';
import { NbStepperModule, NbCardModule, NbButtonModule, NbIconModule, NbRadioModule, NbTabsetModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { InstantComponent } from './instant.component';
import { FormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import "../ckeditor.loader";
import "ckeditor";
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
  imports: [
    ThemeModule,
    NbStepperModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbRadioModule,
    NbIconModule,
    NbTabsetModule,
    NgxTypeaheadModule,
    NbCheckboxModule,
    CKEditorModule,
    NbInputModule,
  ],
  declarations: [
    InstantComponent,
  ],
})
export class InstantModule { }
