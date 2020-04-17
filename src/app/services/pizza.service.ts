import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PizzaDto from '../models/pizza.dto';
import Pizza from '../models/pizza';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  url = 'https://api.ynov.jcatania.io/pizza'
  constructor(
    private http: HttpClient,
  ) { }

  getOne(id: number): Observable<PizzaDto> {
    return this.http.get<PizzaDto>(this.url + '/' + id).pipe(
      map(value => {
        if (value) {
          return value;
        }
        else {
          throw new Error('Aucune pizza trouvée')
        }

      })
    );
  }

  getAll(): Observable<PizzaDto[]> {
    return this.http.get<PizzaDto[]>(this.url).pipe(
      map(value => {
        if (value && value.length > 0) {
          return value;
        }
        else {
          throw new Error('Aucune pizza trouvée')
        }

      })
    );
  }
  create() {

  }

  delete() {

  }
}
