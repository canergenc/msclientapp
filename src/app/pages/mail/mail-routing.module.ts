import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail.component';
import { TemplateComponent } from './template/template.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        path: 'template',
        component: TemplateComponent,
      },
      {
        path: 'query',
        component: QueryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MailRoutingModule {
}

