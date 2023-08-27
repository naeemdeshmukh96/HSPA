import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './service/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';

import { Routes, RouterModule } from '@angular/router';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: RentPropertyComponent },
  { path: 'property-details/:id', component: PropertyDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    RentPropertyComponent,
    PropertyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
