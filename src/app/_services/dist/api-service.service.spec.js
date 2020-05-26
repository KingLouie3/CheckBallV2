"use strict";
/* tslint:disable:no-unused-variable */
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var api_service_service_1 = require("./api-service.service");
describe('Service: ApiService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [api_service_service_1.ApiServiceService]
        });
    });
    it('should ...', testing_1.inject([api_service_service_1.ApiServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
