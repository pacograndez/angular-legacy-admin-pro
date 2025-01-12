import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html'
})
export class IncreaseComponent {

  // Renombrar un @Input()
  @Input('valor') public progress: number = 0;
  // @Input() public progress: number = 0;
  @Input() public btnClass: string = 'btn btn-primary';

  @Output() newValue: EventEmitter<number> = new EventEmitter();

  get getPercentage(): string {
    return `${this.progress}%`;
  }

  public changeValue(value: number): boolean {
    if (this.progress >= 100 && value >= 0) {
      this.newValue.emit(100);
      return this.progress === 100;
    }

    if (this.progress <= 0 && value < 0) {
      this.newValue.emit(0);
      return this.progress === 0;
    }

    this.progress = this.progress + value;
    this.newValue.emit(this.progress);
  }

  public onChange(value: number) {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }

    this.newValue.emit(this.progress);
  }

}
