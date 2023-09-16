import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/HousingService';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public PropertyId!: number;
  property = new Property();

  galleryOptions!: NgxGalleryOptions[]|any;
  galleryImages!: NgxGalleryImage[];

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

    this.carouselInit();

  }

  carouselInit(){
    this.galleryOptions = [
      {
        width: '100%',
        height: '470px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/prop-1.png',
        medium: 'assets/images/prop-1.png',
        big: 'assets/images/prop-1.png'
      },
      {
        small: 'assets/images/prop-2.png',
        medium: 'assets/images/prop-2.png',
        big: 'assets/images/prop-2.png'
      },
      {
        small: 'assets/images/prop-3.png',
        medium: 'assets/images/prop-3.png',
        big:'assets/images/prop-3.png'
      },
      {
        small: 'assets/images/prop-3.png',
        medium: 'assets/images/prop-3.png',
        big:'assets/images/prop-3.png'
      },
      {
        small: 'assets/images/prop-3.png',
        medium: 'assets/images/prop-3.png',
        big:'assets/images/prop-3.png'
      }
    ];

  }

}
