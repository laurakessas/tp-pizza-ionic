import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IngredientDto from '../models/ingredient.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  url = 'https://api.ynov.jcatania.io/ingredient'
  constructor(private http: HttpClient) { }


  getOne(id: number): Observable<IngredientDto> {
    return this.http.get<IngredientDto>(this.url + '/' + id).pipe(
      map(value => {
        if (value) {
          return value;
        }
        else {
          throw new Error('Aucun ingrédient trouvé')
        }

      })
    );
  }

  getAll(): Observable<IngredientDto[]> {
    return this.http.get<IngredientDto[]>(this.url).pipe(
      map(value => {
        if (value && value.length > 0) {
          return value;
        }
        else {
          throw new Error('Aucun ingrédient trouvé')
        }

      })
    );
  }
}