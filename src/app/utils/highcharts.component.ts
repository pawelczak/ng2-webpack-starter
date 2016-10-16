// 3d party imports
import { Component, Input, OnInit } from '@angular/core';
import { HighchartsService } from './highcharts.service';


@Component({
    selector: 'highcharts',
    template: `<div id="container" style="width:60%" ></div>`,
    providers: [
        HighchartsService
    ]
    // template: require('./highcharts.component.html')
})
export class HighchartsComponent {

    @Input() options: any = {

        chart: {
            renderTo: 'container',
            type: 'area'
        },
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: 'black'
                    // color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: 'red',
                // lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: 'black'
                // color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: 'black'
                // color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: 'black'
                // color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    };

    constructor(private highchartsService: HighchartsService) {}

    ngAfterViewInit() {
        this.render();
    }

    private render() {
        this.highchartsService.run(this.options);
        //
    }
}
