import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent {

  constructor(private giftService: GifsService) { }


  get resultados() {
    return this.giftService.resultado
  }
  get imgUrl() {
    return this.giftService.url
  }

}
