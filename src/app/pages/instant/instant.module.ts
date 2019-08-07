import { NgModule } from '@angular/core';
import { NbStepperModule, NbCardModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { InstantComponent } from './instant.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbStepperModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [
    InstantComponent,
  ],
})
export class InstantModule { }
