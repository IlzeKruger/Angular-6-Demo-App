import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Warrant {
    code: string;
    type: string;
    issuer:string;
    exercisePrice:number;
    multiplier:number;
    bid:number;
    offer:number;
    volume:number;
    expiryDate:string;
}

export interface Filter {
    type: string;
    expiryDates: string[];
}

export interface WarrantsResponse {
    filter: Filter[];
    warrants: Warrant[];
}

@Injectable()
export class  WarrantService {

    warrantsUrl = 'assets/warrants.json';
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient){}

    getWarrants(): Observable < WarrantsResponse > {

      return this.http.get<WarrantsResponse>(this.warrantsUrl).pipe(
          map((response: WarrantsResponse) => {
              return response as WarrantsResponse;
          })

      );

    }

}