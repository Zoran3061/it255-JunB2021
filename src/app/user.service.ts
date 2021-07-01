import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/User';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://it255.glitch.me/users"

  constructor(private _httpClient: HttpClient) { }

  private _getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('authorization', 'ovde_ide_token');
    headers = headers.set('novi_header', 'novi_header');
    return headers;
  }

  getAll(): Observable<User[]> {
    return this._httpClient.get(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) =>
        this._createUserFromObject(item))),
    );
  }

  getOneByID(id: number) {
    return this._httpClient.get(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createUserFromObject(data)),
    );
  }

  create(user: User): Observable<User> {
    return this._httpClient.post(this.baseUrl, user, { headers: this._getHeaders() }).pipe(
      map((data: any) => this._createUserFromObject(data)),
    );
  }

  update(user: User): Observable<User> {
    return this._httpClient.put(this.baseUrl, user, { headers: this._getHeaders() }).pipe(
      map((data: any) => this._createUserFromObject(data)),
    );
  }

  delete(id: number): Observable<User> {
    return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createUserFromObject(data)),
    );
  }

  private _createUserFromObject(item: any) {
    return new User(item.id, item.username, item.email, item.password, item.role);
  }
}
