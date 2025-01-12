import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent {

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels2: string[] = ['Pan', 'Refrescos', 'Tacos'];
  public labels3: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels4: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
  public data1: MultiDataSet = [[350, 450, 100]];
  public data2: MultiDataSet = [[10, 15, 40]];
  public data3: MultiDataSet = [[10, 15, 40]];
  public data4: MultiDataSet = [[10, 15, 40]];
  
  public doughnutChartType: ChartType  = 'doughnut';

}
