// 3d party imports
import { Component, Input } from '@angular/core';

// app imports
import { StarColorDirective } from '../directives/star-color.directive';


@Component({
    selector: 'repository',
    directives: [StarColorDirective],
    template: `<span>{{item?.name}}</span> - <span [starColor]="item.stargazers_count" >{{item.stargazers_count}}</span>`
})
export class RepositoryComponent {

    @Input()
    item: any;
}
