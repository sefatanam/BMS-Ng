import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatResponsiveTableComponent } from './mat-responsive-table.component';

describe('MatResponsiveTableComponent', () => {
  let component: MatResponsiveTableComponent;
  let fixture: ComponentFixture<MatResponsiveTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatResponsiveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatResponsiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
