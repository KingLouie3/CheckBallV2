"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng2_charts_1 = require("ng2-charts");
var app_component_1 = require("./app.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var home_component_1 = require("./home/home.component");
var graph_component_1 = require("./graph/graph.component");
var http_1 = require("@angular/common/http");
var search_bar_component_1 = require("./search-bar/search-bar.component");
var forms_1 = require("@angular/forms");
var stats_component_1 = require("./stats/stats.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                graph_component_1.GraphComponent,
                search_bar_component_1.SearchBarComponent,
                stats_component_1.StatsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng_bootstrap_1.NgbModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule
            ],
            providers: [],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
