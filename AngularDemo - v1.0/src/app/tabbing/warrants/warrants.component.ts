import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { WarrantService, WarrantsResponse, Warrant } from './../../services/warrant.service';

const DEFAULT_TYPE = "All Types";

@Component({
  selector: 'app-warrants',
  templateUrl: './warrants.component.html',
  styleUrls: ['./warrants.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WarrantsComponent implements OnInit {
  @ViewChild(MatSort) sort:MatSort;

  private displayedColumns:string[] = ['code', 'issuer', 'exercisePrice', 'multiplier', 'bid', 'offer', 'volume'];
  private dataSource;
  private warrants: Warrant[];
  private typeIssuerArray = new Array<string>();
  private selectedWarrants = new Array<Warrant>();
  private errorMessage: string;
  private typeSelected = DEFAULT_TYPE;

  error = false;

  constructor(private warrantService: WarrantService) {

    //Set the default dropdown select to 'All Types'
    this.typeIssuerArray.push(DEFAULT_TYPE);

    //Retrieve the json file information
    this.warrantService.getWarrants()
      .subscribe(
          (successResponse: WarrantsResponse) => {

              //Retrieve the possible values for the dropdown select
              successResponse.filter.forEach(element => {
                  this.typeIssuerArray.push(element.type);
              });

              this.warrants = successResponse.warrants;
              this.dataSource = new MatTableDataSource( this.warrants );
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

  // Retrieve relevant information for selected Type
  onSelectingDropDown(selectedValue){
    this.typeSelected = selectedValue;
    this.selectedWarrants = [];

    this.warrants.forEach((warrant: Warrant )=> {
      if (selectedValue === DEFAULT_TYPE || warrant.type === selectedValue){
        this.selectedWarrants.push(warrant);
      }
    });
    this.dataSource = new MatTableDataSource( this.selectedWarrants );
  }

}
