import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';
import { IProperty } from '../IProperty.Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties! : Array<IProperty>;

  constructor(private service:HousingService) { }

  ngOnInit(){

    this.service.GetAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log('12',data);
      }
    );


  }

}
