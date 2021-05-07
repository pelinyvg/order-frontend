import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private host = `${environment.baseUrl}/items`;

  constructor(private http: HttpClient) {
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.host);
  }

  public getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.host}/${id}`);
  }

  public addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.host, item);
  }
}
