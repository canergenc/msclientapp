import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-mail',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class MailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
