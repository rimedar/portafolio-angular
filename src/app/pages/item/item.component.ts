import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Subscriber } from 'rxjs';
import { ProductoDesrcipcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDesrcipcion;
  id: string;

  constructor( private route: ActivatedRoute,
               public productoSvc: ProductosService) { }

  ngOnInit() {
    this.route.params
        .subscribe( parametros => {
          // console.log(parametros[`id`]);
          this.productoSvc.getProducto(parametros[`id`])
          .subscribe( (producto: ProductoDesrcipcion) => {
            this.id = parametros[`id`];
            this.producto = producto;
            // console.log(producto);
          });
        });
  }

}
