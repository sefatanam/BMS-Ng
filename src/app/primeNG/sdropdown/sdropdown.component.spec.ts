import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdropdownComponent } from './sdropdown.component';

describe('SdropdownComponent', () => {
  let component: SdropdownComponent;
  let fixture: ComponentFixture<SdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
