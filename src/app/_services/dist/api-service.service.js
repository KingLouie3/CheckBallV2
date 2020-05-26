"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiServiceService = void 0;
var core_1 = require("@angular/core");
var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(_http) {
        this._http = _http;
        this.season = 2019;
        this.url = "https://www.balldontlie.io/api/v1/players";
    }
    ApiServiceService.prototype.getStats = function () {
        this._http.get(this.url).subscribe(function (res) {
            console.log(res);
        });
    };
    ApiServiceService.prototype.findPlayer = function (player) {
        var _this = this;
        if (player.length >= 3) {
            this._http
                .get("https://www.balldontlie.io/api/v1/players?season[]=2019&search=" + player)
                .subscribe(function (response) {
                _this.first_name = response.data[0].first_name;
                console.log('2nd', _this.first_name);
                _this.last_name = response.data[0].last_name;
                _this.suggestions = response.data.filter(function (player) {
                    if (player.id == 666786) {
                        return (player.id = 666786);
                    }
                    else if (player.id == 666969) {
                        return (player.id = 666969);
                    }
                    return player.height_feet > 1;
                });
                console.log("lets see", response);
            });
            console.log(player);
        }
    };
    ApiServiceService.prototype.getPlayer = function (id, first_name, last_name) {
        var _this = this;
        this._http
            .get("https://www.balldontlie.io/api/v1/season_averages?season=" + this.season + "&player_ids[]=" + id)
            .subscribe(function (response) {
            console.log(response);
            _this.first_name = first_name;
            _this.last_name = last_name;
            response.data[0].first_name = first_name;
            response.data[0].last_name = last_name;
        });
    };
    ApiServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiServiceService);
    return ApiServiceService;
}());
exports.ApiServiceService = ApiServiceService;
