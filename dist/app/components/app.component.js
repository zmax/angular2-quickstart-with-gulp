var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var hero_list_component_1 = require('./hero-list.component');
var hero_service_1 = require('../services/hero.service');
var AppComponent = (function () {
    function AppComponent(_heroService) {
        this._heroService = _heroService;
        this.title = 'Tour of Heroes';
        this.heroes = _heroService.getHeroes();
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'templates/app.html',
            directives: [angular2_1.NgClass, angular2_1.NgFor, angular2_1.NgIf, hero_list_component_1.HeroList],
            providers: [hero_service_1.HeroService],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
