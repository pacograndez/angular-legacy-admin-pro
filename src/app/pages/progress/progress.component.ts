import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  public progress1: number = 25;
  public progress2: number = 35;

  get getPercentage1(): string {
    return `${this.progress1}%`;
  }

  get getPercentage2(): string {
    return `${this.progress2}%`;
  }
}
