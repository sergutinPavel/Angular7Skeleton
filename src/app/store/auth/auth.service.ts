import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import { Store } from '@ngrx/store';
import { selectToken, IRootState } from '../index';


@Injectable()
export class AuthService {
  private authorized = false;
  constructor(private _httpClient: HttpClient, private _store: Store<IRootState>) {
    this._store.select(selectToken).subscribe(v => {
      this.authorized = !!v;
    });
  }

  public isLoggedIn(): boolean {
    return this.authorized;
  }

  public signIn(email: string, password: string): Observable<any> {
    return this._httpClient.post(`${environment.api_endpoint}/login`, {email, password});
  }
}
