import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config/api-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public counter = 2;
  constructor(private http: HttpClient) { }

  public getcharcters(page: number): Observable<any> {
    if (!page){
      page = 1;
    }
    return this.http.get(`${API_URL}/character/?page=${page}`);
  }

  public counterNex(): void {
    if (this.counter <= 34) {
      this.counter++;
    }
  }
  public counterPrev(): void {
    if (this.counter > 1){
      this.counter--;
    }
  }

  public searchCharacter(character: any): Observable<any>{
    return this.http.get(`${API_URL}/character/?name=${character}`);
  }
}
