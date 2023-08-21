import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  property: any = {
    "Id":1,
    "Name":"Sahil",
    "Type":"Flat",
    "Price":12000
  }

}
