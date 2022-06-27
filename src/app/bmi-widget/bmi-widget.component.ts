import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bmi-widget',
  templateUrl: './bmi-widget.component.html',
  styleUrls: ['./bmi-widget.component.scss']
})
export class BmiWidgetComponent implements OnInit, AfterViewInit {
  @ViewChild('tooltip') tooltip!: ElementRef;
  @ViewChild('input') range!: ElementRef;
  @Input() bmiValue: number = 0;
  @Input() userName: string = 'John';
  @Input() max: number = 120;
  @Input() min: number = 0;
  isInputValid = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.bmiValue = this.range.nativeElement.value;
    if (this.bmiValue > this.max || this.bmiValue < this.min) {
      console.warn('Invalid BMI value');
      this.isInputValid = false;
      return;
    }
    this.updateTooltip();
  }



  updateTooltip() {
    var startPosition = - (this.tooltip.nativeElement.clientWidth) / 2;
    var stepWidth = (this.range.nativeElement.getBoundingClientRect().width) / this.max;
    var currentStep = this.bmiValue - this.range.nativeElement.min;
    // Reposition tooltip on top of the thumb
    this.tooltip.nativeElement.style.left = Math.round(stepWidth * currentStep + startPosition) + "px";
  }
}
