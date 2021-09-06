import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
