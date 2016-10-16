import { Injectable } from '@angular/core';

import { Highcharts } from './highcharts';


@Injectable()
export class HighchartsService {

    // private highcharts : HighchartsStatic;

    constructor() {
        // this.highcharts = Highcharts;
    }

    createChart(options: any) {
        new Highcharts.Chart(options);
    }

    run(options: any) {
        new Highcharts.Chart(options);
    }
}
