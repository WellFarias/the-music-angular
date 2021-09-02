import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/Instrument';
import { InstrumentServiceService } from 'src/app/services/instrument-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  constructor(private instrumentService: InstrumentServiceService, private router: Router) { }

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
