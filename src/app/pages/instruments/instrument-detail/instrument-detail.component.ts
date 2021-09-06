import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instrument } from '../shared/instrument.model';
import { InstrumentService } from '../shared/instrument.service';

@Component({
  selector: 'app-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.scss']
})
export class InstrumentDetailComponent implements OnInit {

  instrument: Instrument = new Instrument();

  constructor( private instrumentService: InstrumentService, private activateRouter: ActivatedRoute  ) {
    this.activateRouter.params.subscribe(
      params => {
        this.getInstrument(params['id'])
      }
    )
  }

  ngOnInit(): void {
    this.getInstrument;
  }

  getInstrument(id) {
    this.instrumentService.findById(id).subscribe( res => {
      this.instrument = res
      console.log(res)
    }, error => {
      console.log(error)
    })
  }

}
