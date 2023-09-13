import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/HousingService';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public PropertyId!: number;
  property = new Property();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ){ }

  ngOnInit() {
    this.PropertyId = +this.route.snapshot.params["id"];

    this.route.data.subscribe(
      (data) => {
        if(data){
          this.property = data['prp'];
        }
      }
    );

    // this.route.params.subscribe(
    //   (params) => {
    //     this.PropertyId = +params['id'];
    //     this.housingService.GetProperty(this.PropertyId).subscribe(
    //       (data) => {
    //         if(data){
    //           debugger;
    //            this.property.Name = data.Name;
    //            this.property.Price = data.Price;
    //            this.property.SellRent = data.SellRent;
    //            this.property.PType = data.PType;
    //            this.property.FType = data.FType;
    //            this.property.BHK = data.BHK;
    //            this.property.BuiltArea = data.BuiltArea;
    //            this.property.City = data.City;
    //            this.property.RTM = data.RTM;
    //            this.property.Possession = data.Possession;
    //            this.property.Image = data.Image;
    //         }
    //       }
    //     );
    //   }
    // )

  }


}
