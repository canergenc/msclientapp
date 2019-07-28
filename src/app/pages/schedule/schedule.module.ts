import { NgModule } from '@angular/core';
import {
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [
    ThemeModule,
    
  ],
  declarations: [
    ScheduleComponent,
  ],
})
export class ScheduleModule { }
