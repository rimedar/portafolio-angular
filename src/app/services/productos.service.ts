import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProductos } from '../interfaces/info-productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: InfoProductos[] = [];
  productosFiltrado: InfoProductos[] = [];
  constructor( private http: HttpClient ) {

    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-8af19.firebaseio.com/productos_idx.json')
    .subscribe( (resp: InfoProductos[]) => {
      // tslint:disable-next-line: no-string-literal
      // console.log( resp );
      this.productos = resp;
      this.cargando = false;

  });

}
getProducto( id: string ) {

  return this.http.get(`https://angular-html-8af19.firebaseio.com/productos/${ id }.json`);
}

buscarProducto( termino: string) {

  this.productosFiltrado = this.productos.filter( producto => {
    return true;
  });
  console.log( this.productosFiltrado );
}

}
