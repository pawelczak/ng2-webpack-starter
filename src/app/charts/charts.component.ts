// 3d party imports
import { Component } from '@angular/core';

import { HighchartsComponent } from '../utils/highcharts.component';
// import * as jQuery from 'jquery';
// import * as Highcharts from 'highcharts/highstock.src.js';
//
// declare var require: any;
// var Highcharts = require('highcharts/highstock.src');
//
// var Highcharts = require('highcharts/highstock.src');
declare var Highcharts: any;


@Component({
    selector: 'charts',
    template: require('./charts.component.html'),
    directives: [
        HighchartsComponent
    ]
})
export class ChartsComponent {

	//
    // private data = [
    //     {
    //         name: 'USA',
    //         data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
    //             1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
    //             27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
    //             26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
    //             24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
    //             22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
    //             10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    //     },
    //     {
    //         name: 'USSR/Russia',
    //         data: [null, null, null, null, null, null, null, null, null, null,
    //             5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
    //             4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
    //             15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
    //             33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
    //             35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
    //             21000, 20000, 19000, 18000, 18000, 17000, 16000]
    //     }];
	//
    // public options = {
    //     chart: {
    //         renderTo: 'container',
    //         type: 'area'
    //     },
    //     title: {
    //         text: 'Combination chart'
    //     },
    //     xAxis: {
    //         categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    //     },
    //     labels: {
    //         items: [{
    //             html: 'Total fruit consumption',
    //             style: {
    //                 left: '50px',
    //                 top: '18px',
    //                 color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
    //             }
    //         }]
    //     },
    //     series: [{
    //         type: 'column',
    //         name: 'Jane',
    //         data: [3, 2, 1, 3, 4]
    //     }, {
    //         type: 'column',
    //         name: 'John',
    //         data: [2, 3, 5, 7, 6]
    //     }, {
    //         type: 'column',
    //         name: 'Joe',
    //         data: [4, 3, 3, 9, 0]
    //     }, {
    //         type: 'spline',
    //         name: 'Average',
    //         data: [3, 2.67, 3, 6.33, 3.33],
    //         marker: {
    //             lineWidth: 2,
    //             lineColor: Highcharts.getOptions().colors[3],
    //             fillColor: 'white'
    //         }
    //     }, {
    //         type: 'pie',
    //         name: 'Total consumption',
    //         data: [{
    //             name: 'Jane',
    //             y: 13,
    //             color: Highcharts.getOptions().colors[0] // Jane's color
    //         }, {
    //             name: 'John',
    //             y: 23,
    //             color: Highcharts.getOptions().colors[1] // John's color
    //         }, {
    //             name: 'Joe',
    //             y: 19,
    //             color: Highcharts.getOptions().colors[2] // Joe's color
    //         }],
    //         center: [100, 80],
    //         size: 100,
    //         showInLegend: false,
    //         dataLabels: {
    //             enabled: false
    //         }
    //     }]
    // };
	//
    // // ngOnInit() {
    // //     // jQuery('#container').text('foooo');
    // // }
	// //
	// // ngAfterViewInit() {
    //  //    this.ren();
	// // }
	//
    // render() {
    //     new Highcharts.Chart({
    //         chart: {
    //             renderTo: 'container',
    //             type: 'column'
    //         },
    //         title: {
    //             text: 'Fruit Consumption'
    //         },
    //         xAxis: {
    //             title: {
    //                 text: 'Fruit Number'
    //             },
    //             tickInterval: 1
    //         },
    //         yAxis: {
    //             title: {
    //                 text: 'Fruit eaten'
    //             },
    //             tickInterval: 1
    //         },
    //         series: [{
    //             name: 'Jane',
    //             data: [1, 0, 4]
    //         }, {
    //             name: 'John',
    //             data: [5, 7, 3]
    //         }]
    //     });
    // }
	//
    // ren() {
    //     new Highcharts.Chart({
    //         chart: {
    //             renderTo: 'container',
    //                 type: 'area'
    //         },
    //         title: {
    //             text: 'Combination chart'
    //         },
    //         xAxis: {
    //             categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    //         },
    //         labels: {
    //             items: [{
    //                 html: 'Total fruit consumption',
    //                 style: {
    //                     left: '50px',
    //                     top: '18px',
    //                     color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
    //                 }
    //             }]
    //         },
    //         series: [{
    //             type: 'column',
    //             name: 'Jane',
    //             data: [3, 2, 1, 3, 4]
    //         }, {
    //             type: 'column',
    //             name: 'John',
    //             data: [2, 3, 5, 7, 6]
    //         }, {
    //             type: 'column',
    //             name: 'Joe',
    //             data: [4, 3, 3, 9, 0]
    //         }, {
    //             type: 'spline',
    //             name: 'Average',
    //             data: [3, 2.67, 3, 6.33, 3.33],
    //             marker: {
    //                 lineWidth: 2,
    //                 lineColor: Highcharts.getOptions().colors[3],
    //                 fillColor: 'white'
    //             }
    //         }, {
    //             type: 'pie',
    //             name: 'Total consumption',
    //             data: [{
    //                 name: 'Jane',
    //                 y: 13,
    //                 color: Highcharts.getOptions().colors[0] // Jane's color
    //             }, {
    //                 name: 'John',
    //                 y: 23,
    //                 color: Highcharts.getOptions().colors[1] // John's color
    //             }, {
    //                 name: 'Joe',
    //                 y: 19,
    //                 color: Highcharts.getOptions().colors[2] // Joe's color
    //             }],
    //             center: [100, 80],
    //             size: 100,
    //             showInLegend: false,
    //             dataLabels: {
    //                 enabled: false
    //             }
    //         }]
    //     });
    // }
	//
    // renderChart(){
    //     new Highcharts({
    //         chart: {
    //             type: 'area',
    //             renderTo: 'container'
    //         },
    //         title: {
    //             text: 'US and USSR nuclear stockpiles'
    //         },
    //         subtitle: {
    //             text: 'Source: thebulletin.metapress.com'
    //         },
    //         xAxis: {
    //             allowDecimals: false,
    //             labels: {
    //                 formatter: function () {
    //                     return this.value;
    //                 }
    //             }
    //         },
    //         yAxis: {
    //             title: {
    //                 text: 'Nuclear weapon states'
    //             },
    //             labels: {
    //                 formatter: function () {
    //                     return this.value / 1000 + 'k';
    //                 }
    //             }
    //         },
    //         tooltip: {
    //             pointFormat: '{series.name} produced <b>{point.y:,.0f}</b>' +
    //             '<br/>warheads in {point.x}'
    //         },
    //         plotOptions: {
    //             area: {
    //                 pointStart: 1940,
    //                 marker: {
    //                     enabled: false,
    //                     symbol: 'circle',
    //                     radius: 2,
    //                     states: {
    //                         hover: {
    //                             enabled: true
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         series: this.data
    //     });
    // }

}
