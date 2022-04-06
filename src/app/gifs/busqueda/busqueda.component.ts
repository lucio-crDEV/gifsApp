import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') textBuscar!: ElementRef<HTMLInputElement>;


  constructor( private gifsService: GifsService ){}

  buscar(){
    const valor = this.textBuscar.nativeElement.value

    if(valor.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs( valor );

    // limpiar campo de búsqueda
    this.textBuscar.nativeElement.value = '';
    
  }
}
