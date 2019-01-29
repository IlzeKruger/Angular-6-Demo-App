import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { OptionsService, OptionsResponse, Options, OptionDetails } from './../../services/options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  private displayedColumns:string[] = ['code', 'bid', 'offer', 'openInterest', 'volume', 'lastTrade', 'strikePrice'];
  private dataSource;

  private optionsResponse: OptionsResponse;
  private options: any[];
  private optionDetails: any[];
  private errorMessage: string;

  error = false;
  myDate: Date;

  constructor(private optionsService: OptionsService) {
    this.optionsService.getOptions()
      .subscribe(
        (successResponse: OptionsResponse) => {

          console.log("successfully retrieved the data");
          this.optionDetails = successResponse.optionDetails;
          this.options = new Array<Options>();
          let i=0;

          successResponse.optionDetails.forEach(optionDetail => {
            this.myDate = new Date(optionDetail.expiryDate); 
            this.optionDetails[i].expiryDate = this.myDate
            i++;

            optionDetail.options.forEach(option => {
              option.bid = this.currencyConverter(option.bid);
              option.offer = this.currencyConverter(option.offer);
              option.lastTrade = this.currencyConverter(option.lastTrade);
              option.strikePrice = this.currencyConverter(option.strikePrice);
              console.log(option.offer);
            })

          });

          this.dataSource = new MatTableDataSource( this.optionDetails );
        },
        (errorResponse) => {
          this.errorMessage = errorResponse.message;
          this.error = true;
          console.log('Error occurred retrieving data. Error is: ', errorResponse.message);
        }
    )
   }

  ngOnInit() {
  }

  currencyConverter(number) {
    var currencyValue = "";
    try {
      console.log("testing");
      
      currencyValue = number.toLocaleString(undefined, {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3
                  })
    } catch (e) {
      currencyValue = number;
    }
    return currencyValue;
  }
}
