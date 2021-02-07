import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div class='container'>
      <h1><a class='navbar-brand'>{{title}}</a></h1>
      <pm-products></pm-products>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acme Product Management';
}
