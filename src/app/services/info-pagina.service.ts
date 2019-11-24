import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  constructor( private http: HttpClient) {


    // console.log('Servicio de infoPagina :) ');

    // Leer el archivo json
    this.http.get('assets/data/data-page.json')
    .subscribe ( (resp: InfoPagina ) => {
      this.cargada = true;
      this.info = resp;
      // tslint:disable-next-line: no-string-literal
      console.log( resp );

    });
  }
}
