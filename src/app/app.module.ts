import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordFinderComponent } from './All_Components/record-finder/record-finder.component';
import { RecordsResultsComponent } from './All_Components/records-results/records-results.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './All_Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordFinderComponent,
    RecordsResultsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
