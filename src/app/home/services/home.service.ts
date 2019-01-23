import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Item} from '../modules/table/models/item.interface';

@Injectable()
export class HomeService {

  constructor(private _http: HttpClient) {}

  getData(): Observable<Item[]> {
    return this._http
      .get<{ result: Item[] }>('/assets/db.json')
      .pipe(map(data => data.result));
  }
}
