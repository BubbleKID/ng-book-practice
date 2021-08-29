import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'demo-for-sku';

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
