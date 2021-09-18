import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrument, InstrumentCategories } from '../shared/instrument.model';
import { InstrumentService } from '../shared/instrument.service';

@Component({
  selector: 'app-instrument-register',
  templateUrl: './instrument-register.component.html',
  styleUrls: ['./instrument-register.component.scss']
})
export class InstrumentRegisterComponent implements OnInit {
  instrument: Instrument = new Instrument();

  money: ""

  instrumentCategories: Array<InstrumentCategories>;


  constructor(private instrumentService: InstrumentService, private router: Router) { }

  ngOnInit(): void {
    this.instrumentCategories = InstrumentCategories.categories
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
