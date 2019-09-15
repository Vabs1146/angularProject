import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouldRDetailsComponent } from './mould-r-details.component';

describe('MouldRDetailsComponent', () => {
  let component: MouldRDetailsComponent;
  let fixture: ComponentFixture<MouldRDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouldRDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouldRDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
