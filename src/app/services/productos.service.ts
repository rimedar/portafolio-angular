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

    return new Promise(( resolve, reject ) => {

    this.http.get('https://angular-html-8af19.firebaseio.com/productos_idx.json')
    .subscribe( (resp: InfoProductos[]) => {
      // tslint:disable-next-line: no-string-literal
      // console.log( resp );
      this.productos = resp;
      this.cargando = false;
      resolve();
    });

  });

}
getProducto( id: string ) {

  return this.http.get(`https://angular-html-8af19.firebaseio.com/productos/${ id }.json`);
}

buscarProducto( termino: string) {

  if (this.productos.length === 0 ) {
      this.cargarProductos().then( () => {
        this.filtrarProductos( termino );


      });
  } else {
    this.filtrarProductos( termino );
  }
  /* this.productosFiltrado = this.productos.filter( producto => {
    return true;
  });
  console.log( this.productosFiltrado );*/
}
private filtrarProductos( termino: string) {

console.log(this.productos);
this.productosFiltrado =  [];

termino = termino.toLocaleLowerCase();

this.productos.forEach( prod => {
  const tituloLower = prod.titulo.toLocaleLowerCase();

  if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
    this.productosFiltrado.push( prod );
  }
});
}

}
