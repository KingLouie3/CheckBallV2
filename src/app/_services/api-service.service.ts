import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

constructor(public _http: HttpClient) { }
season = 2019;
first_name: any;
last_name: any;
suggestions: any;
url = `https://www.balldontlie.io/api/v1/players`

getStats() {
  this._http.get(this.url).subscribe( res => {
    console.log(res);
  });
}

 findPlayer(player) {
    if (player.length >= 3) {
      this._http
        .get<any>(
          `https://www.balldontlie.io/api/v1/players?season[]=2019&search=${player}`
        )
        .subscribe(response => {
          this.first_name = response.data[0].first_name;
          console.log('2nd', this.first_name);

          this.last_name = response.data[0].last_name;
          this.suggestions = response.data.filter(player => {
            if (player.id == 666786) {
              return (player.id = 666786);
            } else if (player.id == 666969) {
              return (player.id = 666969);
            }
            return player.height_feet > 1;
          });
          console.log("lets see", response);
        });

      console.log(player);
    }

}

    getPlayer(id, first_name, last_name) {
    this._http
      .get<any>(
        `https://www.balldontlie.io/api/v1/season_averages?season=${this.season}&player_ids[]=${id}`
      )
      .subscribe(response => {
        console.log(response);
        this.first_name = first_name;
        this.last_name = last_name;
        response.data[0].first_name = first_name;
        response.data[0].last_name = last_name;

        
      });

  
  }



}