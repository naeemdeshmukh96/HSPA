import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/HousingService';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsResolverService implements Resolve<Property>{

    constructor(private router: Router,
       private housingService: HousingService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Property|any> {
      const propId = route.params['id'];
      return this.housingService.GetProperty(+propId).pipe(
        catchError(error => {
          this.router.navigate['/'];
          return of(null)
        })
      );
  }


}
