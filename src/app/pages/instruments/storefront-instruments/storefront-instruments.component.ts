import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../shared/instrument.service';
import { Instrument } from '../shared/instrument.model';

@Component({
  selector: 'app-storefront-instruments',
  templateUrl: './storefront-instruments.component.html',
  styleUrls: ['./storefront-instruments.component.scss']
})
export class StorefrontInstrumentsComponent implements OnInit {

  instruments: Array<Instrument>;

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit(): void {
    this.instrumentService.getInstruments().subscribe(
      instruments => {
        this.instruments = instruments
        console.log("Instrumento", instruments)
      }
    )
  }

}
