import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { IProperty } from '../property/IProperty.Interface';
import { IPropertyBase } from '../model/IPropertyBase';
import { Property } from '../model/property';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient ) { }

  GetAllProperties(): Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json',).pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp') as string);

        if(localProperties){
          for (const id  in localProperties) {
            propertiesArray.push(data[id])
        }
        }

       for (const id  in data) {
          if(data && data[id].SellRent){
            propertiesArray.push(data[id])
          }

        }
        return propertiesArray;
      }
      )
    );
  }

  addProperty(property: Property){
    let newProp = [property];
    if (localStorage.getItem('newProp')){
      newProp = [property,
                  ...[JSON.parse(localStorage.getItem('newProp') as string)]];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    const pid = localStorage.getItem('PID');
    if (pid != null) {
      localStorage.setItem('PID', String(+pid + 1));
      return +pid;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
