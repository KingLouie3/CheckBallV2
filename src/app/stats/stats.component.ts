import { ApiServiceService } from '../_services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
player: any;
  // tslint:disable-next-line: variable-name
  constructor(public _api: ApiServiceService) { }

  ngOnInit() {
  }
  test() {
        this._api.first_name = this.player
        

  }

  

}
