import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  template: `<div class="price-display">\${{ price }}</div>`,
  styleUrls: ['./price-display.component.sass']
})
export class PriceDisplayComponent{

  @Input() price: number;

}
