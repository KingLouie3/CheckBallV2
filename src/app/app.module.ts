import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';



import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      GraphComponent,
      SearchBarComponent,
      StatsComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      HttpClientModule,
      FormsModule,
      ChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
