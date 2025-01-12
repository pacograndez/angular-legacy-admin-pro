import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaseComponent } from './increase/increase.component';
import { FormsModule } from '@angular/forms';
import { DonaChartComponent } from './dona-chart/dona-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [IncreaseComponent, DonaChartComponent],
  exports: [IncreaseComponent, DonaChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
