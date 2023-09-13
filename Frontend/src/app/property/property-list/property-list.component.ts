import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/HousingService';
import { IProperty } from '../IProperty.Interface';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties! : Array<IPropertyBase>;
  SellRent = 1;

  constructor(private housingService:HousingService,
    private route:ActivatedRoute) { }

  ngOnInit(){
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    }
    this.housingService.GetAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        // console.log('12',data);

        // const newProperty = JSON.parse(localStorage.getItem('newProp') as string);
        // console.log('1223232',newProperty);
        // if(newProperty.sellRent == this.SellRent){
        //   this.properties = [newProperty, ...this.properties];
        // }
        console.log('2323',this.properties );
      }
    );




  }

}
