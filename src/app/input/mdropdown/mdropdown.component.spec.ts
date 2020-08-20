import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdropdownComponent } from './mdropdown.component';

describe('MdropdownComponent', () => {
  let component: MdropdownComponent;
  let fixture: ComponentFixture<MdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
