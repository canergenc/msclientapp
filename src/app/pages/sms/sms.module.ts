import { NgModule } from '@angular/core';
import {
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TemplateComponent } from './template/template.component';
import { QueryComponent } from './query/query.component';
import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';


@NgModule({
  imports: [
    ThemeModule,
    SmsRoutingModule,
  ],
  declarations: [
    SmsComponent,
    TemplateComponent,
    QueryComponent,
  ],
})
export class SmsModule { }
