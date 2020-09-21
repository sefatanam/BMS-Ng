import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusPtableComponent } from './reus-ptable.component';

describe('ReusPtableComponent', () => {
  let component: ReusPtableComponent;
  let fixture: ComponentFixture<ReusPtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusPtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusPtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
