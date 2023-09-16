import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './service/HousingService';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailsResolverService } from './property/property-details/property-details-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: RentPropertyComponent },
  { path: 'property-details/:id',
          component: PropertyDetailsComponent,
          resolve: {prp: PropertyDetailsResolverService} },
  { path: 'user/register', component: UserRegisterComponent},
  { path: 'user/login', component: UserLoginComponent},
  { path: '**', component: PropertyListComponent}
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
    UserRegisterComponent,
    UserLoginComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    HousingService,
    UserService,
    AuthService,
    PropertyDetailsResolverService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
