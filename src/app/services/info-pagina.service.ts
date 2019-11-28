import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { InfoEquipo } from '../interfaces/info-equipo.interfaces';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  // equipo: InfoEquipo = {};
  equipo: any[] = [];

  constructor( private http: HttpClient) {
    // console.log('Servicio de infoPagina :) ');
    this.cargarInfo();
    this.cargarEquipo();
  }
  private cargarInfo() {
 // Leer el archivo json
    this.http.get('assets/data/data-page.json')
    .subscribe ( (resp: InfoPagina ) => {
      this.cargada = true;
      this.info = resp;
      // tslint:disable-next-line: no-string-literal
      // console.log( resp );
    });
  }
  private cargarEquipo() {
    /* this.http.get('assets/data/data-equipo.json')
    .subscribe ( (resp: InfoEquipo ) => {
      this.cargada = true;
      this.equipo = resp;
      console.log( resp );
    }); */
    this.http.get('https://angular-html-8af19.firebaseio.com/equipo.json')
    .subscribe ( (resp: any[])  => {
      this.equipo = resp;
      // tslint:disable-next-line: no-string-literal
      // console.log( resp );
  });
}
}
