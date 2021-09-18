import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/pages/instruments/shared/instrument.model';

@Component({
  selector: 'app-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.scss']
})
export class InstrumentCardComponent implements OnInit {

  @Input() instrument: Instrument;

  constructor() { }

  ngOnInit(): void {
  }

}
