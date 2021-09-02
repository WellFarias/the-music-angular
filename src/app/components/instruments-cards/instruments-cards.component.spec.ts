import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsCardsComponent } from './instruments-cards.component';

describe('InstrumentsCardsComponent', () => {
  let component: InstrumentsCardsComponent;
  let fixture: ComponentFixture<InstrumentsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
