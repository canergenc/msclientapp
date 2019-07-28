import { NgModule } from '@angular/core';
import {
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { InstantComponent } from './instant.component';

@NgModule({
  imports: [
    ThemeModule,
    
  ],
  declarations: [
    InstantComponent,
  ],
})
export class InstantModule { }
