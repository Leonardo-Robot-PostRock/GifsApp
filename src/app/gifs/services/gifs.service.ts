import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = '';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0, 10);
    console.log(this._historial);

    this.http
      .get('http://api.giphy.com/v1/gifs/search?api_key=hnFMnWNKHf0XO2LzPayYHkI9tYpoRjHe&q=Naruto&limit=10')
      .subscribe((res: any) => {
        console.log(res.data);
      });
  }
}
