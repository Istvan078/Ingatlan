import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  columns: {}[] = [
    {key: 'megnevezes', text: 'Kategória'},
    {key: 'leiras', text: 'Leírás'},
    {key: 'hirdetesDatuma', text: 'Hirdetés dátuma'},
    {key: 'tehermentes', text: 'Tehermentes'},
    {key: 'kepUrl', text: 'Fénykép'}
  ]

  getColumns() {
    return this.columns
  }
}
