import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import { IFilterParams } from '../../models/sortingParams';

@Injectable()
export class GeneralService {
  constructor(private _httpClient: HttpClient) {}

  getTestData(data?: IFilterParams): Observable<any> {
    let params = new HttpParams();
    if (data && data.sorting) { Object.keys(data.sorting)
      .forEach(v => data.sorting[v].toString().length ? params = params.append(v, `${data.sorting[v]}`) : ''); }
    if (data && data.filters) { Object.keys(data.filters)
      .forEach(v => data.filters[v].toString().length ? params = params.append(v, `${data.filters[v]}`) : ''); }
    return this._httpClient.get(`${environment.api_endpoint}/api/images/get?format=src`, {params})
      .pipe(map(res => res));
  }
}
