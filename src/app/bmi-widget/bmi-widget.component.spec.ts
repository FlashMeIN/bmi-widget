import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiWidgetComponent } from './bmi-widget.component';

describe('BmiWidgetComponent', () => {
  let fixture: ComponentFixture<BmiWidgetComponent>;
  let component: BmiWidgetComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(BmiWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default inputs', () => {
    expect(component.min).toBe(0);
    expect(component.max).toBe(120);
    expect(component.bmiValue).toBe(0);
    expect(component.userName).toBe('John');
  });

  it('should update new inputs', () => {
    const bmiElement: HTMLElement = fixture.nativeElement;
    expect(bmiElement.textContent).toContain('John');
    // for username
    component.userName = 'Romana';
    component.min = 0;
    component.max = 150;
    component.bmiValue = 70;

    fixture.autoDetectChanges();
    expect(bmiElement.textContent).toContain('Romana');
    expect(bmiElement.textContent).toContain('Romana\'s BMI is');
  });

  it('should render invalid input error message when input is wrong', () => {
    const bmiElement: HTMLElement = fixture.nativeElement;
    expect(bmiElement.textContent).toContain('John');
    // for username
    component.min = 50;
    component.max = 150;
    component.bmiValue = 20;
    component.ngAfterViewInit();

    fixture.autoDetectChanges();
    expect(bmiElement.textContent).toContain('Oops...!! Please provide corrected values.');
  });
});
