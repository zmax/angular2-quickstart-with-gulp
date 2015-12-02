import {Component, NgClass, NgFor, NgIf, Input} from 'angular2/angular2';
import {Hero} from '../models/hero';
import {HeroEditor} from './hero-editor.component';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: 'templates/hero-list.html',
    providers: [HeroService],
    directives: [NgClass, NgFor, NgIf, HeroEditor],
    styles:[`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 100%;}
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
export class HeroList {

    @Input() public heroes: Hero[];
    public selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getSelectedClass(hero: Hero) {
        return { 'selected' : hero === this.selectedHero };
    }

}
