import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Hero} from '../models/hero';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.html',
    // directives: [FORM_DIRECTIVES, NgClass, NgFor, NgIf],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [HeroService],
    styles:[`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
    `]
})

export class AppComponent {

    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) {
        this.heroes = _heroService.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
    getSelectedClass(hero: Hero) {
        return { 'selected' : hero === this.selectedHero };
    }

}
