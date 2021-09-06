import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentRegisterComponent } from './instrument-register.component';

describe('InstrumentRegisterComponent', () => {
  let component: InstrumentRegisterComponent;
  let fixture: ComponentFixture<InstrumentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
