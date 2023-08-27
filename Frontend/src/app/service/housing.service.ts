import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { IProperty } from '../property/IProperty.Interface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient ) { }

  GetAllProperties(): Observable<IProperty[]> {
    return this.http.get('data/properties.json',).pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
       for (const id  in data) {
          console.log('1',data);
            propertiesArray.push(data[id])
        }
        return propertiesArray;
      }
      )
    );
  }

}
