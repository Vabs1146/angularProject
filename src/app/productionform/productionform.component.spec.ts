import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionformComponent } from './productionform.component';

describe('ProductionformComponent', () => {
  let component: ProductionformComponent;
  let fixture: ComponentFixture<ProductionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
