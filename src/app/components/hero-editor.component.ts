import {Component, Input, NgModel} from 'angular2/angular2';
import {Hero} from '../models/hero';

@Component({
    selector: 'hero-editor',
    templateUrl: 'templates/hero-editor.html',
    directives: [NgModel, HeroEditor],
})
export class HeroEditor {
    @Input() hero:Hero;
}
