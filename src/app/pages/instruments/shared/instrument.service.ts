import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Instrument } from './instrument.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class InstrumentService {

  baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getInstruments(): Observable<Array<Instrument>> {
    return this.http.get(this.baseURL).pipe(
      map(this.jsonDataToInstruments),
      catchError(this.handlerError)
    )
  }

  create(instrument: Instrument): Observable<Instrument> {
    return this.http.post<Instrument>(this.baseURL, instrument)
  }

  findById(id: Instrument): Observable<Object> {
    return this.http.get<Object>(this.baseURL + "/" + id);
  }

  private jsonDataToInstruments(jsonData: any[]): Array<Instrument> {
    const instruments: Array<Instrument> = [];
    jsonData.forEach(element => instruments.push(element as Instrument));
    console.log(instruments)
    return instruments;
  }

  private handlerError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO =>", error);
    return throwError(error);
  }
}
