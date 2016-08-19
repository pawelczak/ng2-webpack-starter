import {Component, Input} from "@angular/core";
import {StarColorDirective} from "./star-color.directive";

@Component({
    selector: 'repository',
    directives: [StarColorDirective],
    template: `<span>{{item?.name}}</span> - <span [starColor]="item.stargazers_count" >{{item.stargazers_count}}</span>`
})
export class RepositoryDirective {

    @Input()
    item: any;
}