import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConvertorComponent } from './main-convertor.component';

describe('MainConvertorComponent', () => {
  let component: MainConvertorComponent;
  let fixture: ComponentFixture<MainConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
