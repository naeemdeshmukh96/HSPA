import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnChanges{
  @Input() property!: IPropertyBase;
  @Input() hideIcons!: boolean;

  ngOnChanges(){
    console.log('34',this.property);
  }
}
