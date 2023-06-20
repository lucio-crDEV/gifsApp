import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})

export class ResultadoComponent {

  texto:string = 'Copiar'
  constructor(private giftService: GifsService) { }

  get resultados() {
    return this.giftService.resultado
  }
  get imgUrl() {
    return this.giftService.url
  }

  copyText(url: string) {
    const gifUrl = url
    this.giftService.copy(gifUrl)
    setTimeout(() => {
      alert('link copiado!')
    }, 500);
  }
}
