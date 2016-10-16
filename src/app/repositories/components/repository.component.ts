// 3d party imports
import { Component, Input } from '@angular/core';

// app imports
import { StarColorDirective } from '../directives/star-color.directive';


@Component({
    selector: 'repository',
    directives: [
        StarColorDirective
    ],
    templateUrl: './repository.component.html'
})
export class RepositoryComponent {

    @Input() item: any;
}
