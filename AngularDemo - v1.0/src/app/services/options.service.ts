import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Options {
    code: string;
    type: string;
    bid: any;
    offer: any;
    openInterest: number;
    volume: number;
    lastTrade: any;
    strikePrice: any;
    expiryDate: string;
}

export interface OptionDetails {
    expiryDate: string;
    options: Options[];
}

export interface OptionsResponse {
    filter: string[];
    optionDetails: OptionDetails[];
}

@Injectable()
export class  OptionsService {

    configUrl = 'assets/options.json';

    constructor(private http: HttpClient){}

    getOptions(): Observable < OptionsResponse > {

      return this.http.get<OptionsResponse>(this.configUrl).pipe(
          map((response: OptionsResponse) => {
              return response as OptionsResponse;
          })
      );

    }

}