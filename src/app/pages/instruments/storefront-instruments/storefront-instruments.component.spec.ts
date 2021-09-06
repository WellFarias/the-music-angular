import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefrontInstrumentsComponent } from './storefront-instruments.component';

describe('StorefrontInstrumentsComponent', () => {
  let component: StorefrontInstrumentsComponent;
  let fixture: ComponentFixture<StorefrontInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorefrontInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorefrontInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
