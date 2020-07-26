
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  OnChanges,
  OnInit,
  Optional,
  Self,
  SimpleChanges,
  HostListener,
  EventEmitter
} from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NgControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { coerceNumberProperty } from "@angular/cdk/coercion";

import { Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "my-input",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;

  inputControl = new FormControl(null);
  constructor(@Optional() @Self() private controlDir: NgControl) {
    if (this.controlDir) {
      this.controlDir.valueAccessor = this;
    }
  }

  ngOnInit() { }

  writeValue(obj: any): void {
    if (obj === null) {
      this.inputControl.reset();
    }

    this.inputControl.setValue(obj, {
      emitModelToViewChange: true
    });
    this.onChangeCallback(obj);
  }

  registerOnChange(fn: any): void {
    this.inputControl.valueChanges.subscribe(value => fn(value));
  }

  changeThat() {
    this.inputControl.reset();
  }

  onChangeCallback = (value: string) => { };
  onTouchCallback = () => { };
  registerOnTouched(fn: any): void {
    this.onChangeCallback = fn;
  }
  onBlur() {
    this.onTouchCallback();
  }
  setDisabledState?(isDisabled: boolean): void { }

  onTouched() { }
}
