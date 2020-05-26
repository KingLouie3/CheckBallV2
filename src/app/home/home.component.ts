import { ApiServiceService } from '../_services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(public _api: ApiServiceService) { }
  input: any;

  ngOnInit() {

  }

  getStats() {
    this._api.getStats();
  }

  findPlayer(input) {
    this._api.findPlayer(input);
  }
}
