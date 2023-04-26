import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getPokemon(index){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
