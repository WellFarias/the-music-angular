export class Instrument {
  constructor(
      public id?: string,
      public name?: string,
      public brand?: string,
      public category?: string,
      public year?: number,
      public description?: string,
      public isUsed?: boolean,
      public color?: string,
      public from?: string,
      public delivery?: boolean,
      public price?: string,
      public plots?: string,
      public picture?: string
  ) {}


}

export class FilterProducts {
  static products = [
    'Guitarra',
    'Violão',
    'Baixo',
    'Bateria',
    "Teclas",
    'Ukulele',
    'Amplificadores',
    "Acessórios",
    'Microfones'
  ]
}

export class InstrumentCategories {
  static categories = [
    'Cordas',
    'Teclas',
    'Percussão',
    'Acessórios',
    'Pedais',
    'Amplificadores'
  ]
}









