import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdropdpwnComponent } from './pdropdpwn.component';

describe('PdropdpwnComponent', () => {
  let component: PdropdpwnComponent;
  let fixture: ComponentFixture<PdropdpwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdropdpwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdropdpwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
