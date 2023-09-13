import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';

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

    this.route.params.subscribe(
      (params) => {
        this.PropertyId = +params['id'];
        this.housingService.GetProperty(this.PropertyId).subscribe(
          data => {
            console.log('44',data)
            if(data){
              this.property.Name = data?.name;
            }
          }
        );
      }
    )
  }

  onselectNext(){
    this.PropertyId += 1;
    this.router.navigate(['property-details',this.PropertyId ])
  }

}
