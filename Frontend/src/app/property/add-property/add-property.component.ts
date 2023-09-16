import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { Property } from 'src/app/model/property';
import { AlertifyService } from 'src/app/service/alertify.service';
import { HousingService } from 'src/app/service/HousingService';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  property = new Property();
  addPropertyForm!: FormGroup;

  propertyTypes: Array<string> = ['Flat', 'Pent House', 'Bunglow'];
  furnishedTypes: Array<string> = ['Full', 'Semi', 'Raw'];

  CityList!: any[];

  propertyView: IPropertyBase = {
    Id: 0,
    Name: '',
    Price: 0,
    SellRent: 0,
    PType: '',
    FType: '',
    BHK: 0,
    BuiltArea: 0,
    City: '',
    RTM: true,
  };

  nextClicked!: boolean;

  constructor(private router: Router,
     private fb: FormBuilder,
     private alertify: AlertifyService,
     private housingService: HousingService) {}

  ngOnInit() {
    this.CreateAddPropertyForm();
    this.housingService.getAllCities().subscribe(
      data => {
        this.CityList = data;
        console.log('this.CityList',this.CityList)
      }
    );
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null, Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: ['', Validators.required],
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [0],
        Maintenance: [0],
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null, Validators.required],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null],
      }),
    });
  }

  onSubmit() {
    this.nextClicked = true;
    this.mapProperty();
    this.housingService.addProperty(this.property);
    if (this.allTabsValid()){
      this.alertify.success('Yes');
      console.log(this.addPropertyForm);

      if(this.SellRent.value === '2'){
        this.router.navigate(['/rent-property']);
      }
      else{
        this.router.navigate(['/']);
      }
    }
    else{
      this.alertify.error('No');
    }
  }


  mapProperty(): void {
    this.property.Id = this.housingService.newPropID();
    this.property.SellRent = +this.SellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.PType = this.PType.value;
    this.property.Name = this.Name.value;
    this.property.City = this.City.value;
    this.property.FType = this.FType.value;
    this.property.Price = this.Price.value;
    this.property.Security = this.Security.value;
    this.property.Maintenance = this.Maintenance.value;
    this.property.BuiltArea = this.BuiltArea.value;
    this.property.CarpetArea = this.CarpetArea.value;
    this.property.FloorNo = this.FloorNo.value;
    this.property.TotalFloors = this.TotalFloor.value;
    this.property.Address = this.Address.value;
    this.property.Address2 = this.LandMark.value;
    this.property.RTM = this.RTM.value;
    this.property.Gated = this.Gated.value;
    this.property.MainEntrance = this.MainEntrance.value;
    this.property.Possession = this.PossessionOn.value;
    this.property.Description = this.Description.value;
    this.property.PostedOn = new Date().toString();
  }

  allTabsValid(): boolean{
    if (!this.BasicInfo.valid) {
      if (this.formTabs) {
        this.formTabs.tabs[0].active = true;
        return false;
      }
    } else if (!this.PriceInfo.valid) {
      if (this.formTabs) {
        this.formTabs.tabs[1].active = true;
        return false;
      }
    } else if (!this.AddressInfo.valid) {
      if (this.formTabs) {
        this.formTabs.tabs[2].active = true;
        return false;
      }
    } else if (!this.OtherInfo.valid) {
      if (this.formTabs) {
        this.formTabs.tabs[3].active = true;
        return false;
      }
    }
    return true;
  }

  selectTab(tabId: number, isCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (isCurrentTabValid && this.formTabs) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

    // #region <Getter Methods>
    // #region <FormGroups>
    get BasicInfo() {
      return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceInfo() {
      return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get AddressInfo() {
      return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
  }

  get OtherInfo() {
      return this.addPropertyForm.controls['OtherInfo']  as FormGroup;
  }
  // #endregion

  // #region <Form Controls>
  get SellRent() {
      return this.BasicInfo.controls['SellRent']  as FormControl;
  }

  get BHK() {
      return this.BasicInfo.controls['BHK'] as FormControl;
  }

  get PType() {
      return this.BasicInfo.controls['PType'] as FormControl;
  }

  get FType() {
      return this.BasicInfo.controls['FType']  as FormControl;
  }

  get Name() {
      return this.BasicInfo.controls['Name']  as FormControl;
  }

  get City() {
      return this.BasicInfo.controls['City']  as FormControl;
  }

  get Price() {
      return this.PriceInfo.controls['Price']  as FormControl;
  }

  get BuiltArea() {
      return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }

  get CarpetArea() {
      return this.PriceInfo.controls['CarpetArea']  as FormControl;
  }

  get Security() {
      return this.PriceInfo.controls['Security'] as FormControl;
  }

  get Maintenance() {
      return this.PriceInfo.controls['Maintenance']  as FormControl;
  }

  get FloorNo() {
      return this.AddressInfo.controls['FloorNo']  as FormControl;
  }

  get TotalFloor() {
      return this.AddressInfo.controls['TotalFloor']  as FormControl;
  }

  get Address() {
      return this.AddressInfo.controls['Address']  as FormControl;
  }

  get LandMark() {
      return this.AddressInfo.controls['LandMark']  as FormControl;
  }

  get RTM() {
      return this.OtherInfo.controls['RTM']  as FormControl;
  }

  get PossessionOn() {
      return this.OtherInfo.controls['PossessionOn']  as FormControl;
  }

  get AOP() {
      return this.OtherInfo.controls['AOP']  as FormControl;
  }

  get Gated() {
      return this.OtherInfo.controls['Gated']  as FormControl;
  }

  get MainEntrance() {
      return this.OtherInfo.controls['MainEntrance']  as FormControl;
  }

  get Description() {
      return this.OtherInfo.controls['Description']  as FormControl;
  }

  // #endregion
  // #endregion

}
