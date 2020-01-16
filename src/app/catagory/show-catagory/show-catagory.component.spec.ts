import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatagoryComponent } from './show-catagory.component';

describe('ShowCatagoryComponent', () => {
  let component: ShowCatagoryComponent;
  let fixture: ComponentFixture<ShowCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
