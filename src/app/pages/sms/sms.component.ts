import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-sms',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class SmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
