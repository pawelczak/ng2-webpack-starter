// 3d party imports
import { Component } from '@angular/core';

import { HighchartsComponent } from '../utils/highcharts.component';


@Component({
    selector: 'charts',
    templateUrl: './charts.component.html',
    directives: [
        HighchartsComponent
    ]
})
export class ChartsComponent {

}
