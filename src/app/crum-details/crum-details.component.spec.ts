import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrumDetailsComponent } from './crum-details.component';

describe('CrumDetailsComponent', () => {
  let component: CrumDetailsComponent;
  let fixture: ComponentFixture<CrumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
