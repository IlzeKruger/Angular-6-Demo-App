import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabbingComponent } from './tabbing/tabbing.component';
import { DropdownSelectComponent } from './common/dropdown-select/dropdown-select.component';
import { WarrantsComponent } from './tabbing/warrants/warrants.component';
import { OptionsComponent } from './tabbing/options/options.component';
import { WarrantService } from './services/warrant.service';
import { OptionsService } from './services/options.service';

//Material Design section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [
    AppComponent,
    TabbingComponent,
    DropdownSelectComponent,
    WarrantsComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [          //gets added to the root injector
    WarrantService,
    OptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
