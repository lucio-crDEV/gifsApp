import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  // apiKey para giphy
  private apiKey      : string    = 'UNIUNHq9rjoNittTj8RG7PDYJ7BhgKaA'
  private servicioUrl : string    = 'https://api.giphy.com/v1/gifs'
  private _historial  : string[]  = [];

  public resultado: Gif[] = []

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultado = JSON.parse(localStorage.getItem('resultado')!) || []
   }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase()

    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '30')
          .set('q', query)    

    // Equivalente al metodo fetch de js pero con mejor rendimiento por los "observables"
    this.http.get<SearchGIFResponse>(`${ this.servicioUrl }/search?`, { params })
      .subscribe((resp) => {
        // console.log(resp.data);
        this.resultado = resp.data
        localStorage.setItem('resultado', JSON.stringify(this.resultado))
      })
  }
}
