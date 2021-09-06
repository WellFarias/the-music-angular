import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrument } from '../shared/instrument.model';
import { InstrumentService } from '../shared/instrument.service';

@Component({
  selector: 'app-instrument-register',
  templateUrl: './instrument-register.component.html',
  styleUrls: ['./instrument-register.component.scss']
})
export class InstrumentRegisterComponent implements OnInit {
  instrument: Instrument = new Instrument();

  money: ""

  categories: Array<string> = [
    'Cordas',
    'Teclas',
    'Percussão',
    'Acessórios',
    'Pedais',
    'Amplificadores'
]

  constructor(private instrumentService: InstrumentService, private router: Router) { }

  ngOnInit(): void {
  }

  save(instrument: Instrument): void {
    this.instrumentService.create(instrument).subscribe(() => {
      console.log("Item salvo com sucesso")
      this.router.navigate(['/store'])
    })
  }

  filterMoney() {
    return `R$ ${parseFloat(this.money).toFixed(2).replace('.', ',')}`
  }


}
