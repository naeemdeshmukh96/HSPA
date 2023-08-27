import { Component, Input, OnChanges } from '@angular/core';
import { IProperty } from '../IProperty.Interface';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnChanges{
  @Input() property!: IProperty;

  ngOnChanges(){
    console.log('2',this.property);
  }
}
