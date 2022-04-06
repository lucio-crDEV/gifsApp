import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  // apiKey para giphy
  private apiKey: string = 'UNIUNHq9rjoNittTj8RG7PDYJ7BhgKaA'
  private _historial: string[] = [];

  public resultado: any[] = []

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase()
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 10)
    }
    // equivalente al metodo fetch de js pero con mejro rendimiento por los "observables"
    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=15`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultado = resp.data
      })
  }
}
