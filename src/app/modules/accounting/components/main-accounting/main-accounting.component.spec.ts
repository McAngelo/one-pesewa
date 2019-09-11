import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAccountingComponent } from './main-accounting.component';

describe('MainAccountingComponent', () => {
  let component: MainAccountingComponent;
  let fixture: ComponentFixture<MainAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
