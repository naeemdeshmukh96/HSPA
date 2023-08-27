import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public PropertyId!: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.PropertyId = this.route.snapshot.params["id"]
  }

}
