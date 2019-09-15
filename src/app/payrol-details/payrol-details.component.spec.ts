import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolDetailsComponent } from './payrol-details.component';

describe('PayrolDetailsComponent', () => {
  let component: PayrolDetailsComponent;
  let fixture: ComponentFixture<PayrolDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrolDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
