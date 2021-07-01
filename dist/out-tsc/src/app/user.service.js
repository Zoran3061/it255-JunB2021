import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from './models/User';
import { map } from 'rxjs/operators';
let UserService = class UserService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.baseUrl = "http://it255.glitch.me/users";
    }
    _getHeaders() {
        let headers = new HttpHeaders();
        headers = headers.set('authorization', 'ovde_ide_token');
        headers = headers.set('novi_header', 'novi_header');
        return headers;
    }
    getAll() {
        return this._httpClient.get(this.baseUrl).pipe(map((data) => data.map((item) => this._createUserFromObject(item))));
    }
    getOneByID(id) {
        return this._httpClient.get(this.baseUrl + '/' + id).pipe(map((data) => this._createUserFromObject(data)));
    }
    create(user) {
        return this._httpClient.post(this.baseUrl, user, { headers: this._getHeaders() }).pipe(map((data) => this._createUserFromObject(data)));
    }
    update(user) {
        return this._httpClient.put(this.baseUrl, user, { headers: this._getHeaders() }).pipe(map((data) => this._createUserFromObject(data)));
    }
    delete(id) {
        return this._httpClient.delete(this.baseUrl + '/' + id).pipe(map((data) => this._createUserFromObject(data)));
    }
    _createUserFromObject(item) {
        return new User(item.id, item.username, item.email, item.password, item.role);
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map