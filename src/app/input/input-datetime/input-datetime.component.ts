import { Component, OnInit, AfterViewInit, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';
// import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'my-datetime',
  templateUrl: './input-datetime.component.html',
  styleUrls: ['./input-datetime.component.css']
})
export class InputDatetimeComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input('required') _isRequired = false;
  get isRequired(): boolean {
    return this._isRequired;
  }

  @Input('isRequired')
  set isRequired(value: boolean) {
    this._isRequired = value;
  }
  public inputControl = new FormControl('');
  constructor(@Optional() @Self() private controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }
  public ngAfterViewInit(): void {
    this.inputControl = this.controlDir.control as FormControl;
  }

  ngOnInit() {
    this.settingsValidate();
  }
  settingsValidate = async () => {
    if (this._isRequired) {
      this.inputControl = new FormControl('', [Validators.required]);

    } else {
      this.inputControl = new FormControl('');
    }
  }

  writeValue(obj: any) {
    if (obj === '') {
      this.inputControl.reset();
    }
    this.inputControl.setValue(obj, {
      emitModelToViewChange: false
    });
  }

  registerOnChange(fn: any) {
    this.inputControl.valueChanges.subscribe(value => this.writeValue(value));
  }

  changeThat() {
  }

  onChangeCallback = () => { };
  onTouchCallback = () => { };

  registerOnTouched(fn: any): void {
  }
  onBlur() {

  }
  setDisabledState?(isDisabled: boolean): void { }

  onTouched() { }
}
