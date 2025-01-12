import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona-chart',
  templateUrl: './dona-chart.component.html',
  styles: [
  ]
})
export class DonaChartComponent {

  @Input() public title: string = 'Sin título';
  @Input('labels') public doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor: ['#6857E6', '#009FEE', '#F02059']
    }
  ]

}
