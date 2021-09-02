import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/Instrument';
import { InstrumentServiceService } from 'src/app/services/instrument-service.service';

@Component({
  selector: 'app-instruments-cards',
  templateUrl: './instruments-cards.component.html',
  styleUrls: ['./instruments-cards.component.scss']
})
export class InstrumentsCardsComponent implements OnInit {

  instrument: Instrument = new Instrument();

  filterInstruments = [
    {
      text: 'Guitarra',
    },
    {
      text: 'Violão',
    },
    {
      text: 'Baixo',
    },
    {
      text: 'Bateria',
    },
    {
      text: "Teclas"
    },
    {
      text: 'Ukulele',
    },
    {
      text: 'Amplificadores',
    },
    {
      text: "Acessórios",
    },
    {
      text: 'Microfones',
    },
  ]

  instruments: Array<Instrument>

  constructor(private instrumentService: InstrumentServiceService) { }

  ngOnInit(): void {
    this.getInstruments();    
  }

  getInstruments(): void {
    this.instrumentService.getInstruments().subscribe( 
      instruments => this.instruments = instruments,
      error => console.log(error)
     )
  }

}
