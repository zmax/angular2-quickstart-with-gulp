// import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Component, NgClass, NgFor, NgIf} from 'angular2/angular2';
import {HeroList} from './hero-list.component';
import {HeroService} from '../services/hero.service';
import {Hero} from '../models/hero';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.html',
    directives: [NgClass, NgFor, NgIf, HeroList],
    providers: [HeroService],
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public heroes: Hero[];

    constructor(private _heroService: HeroService) {
        this.heroes = _heroService.getHeroes();
    }
}
