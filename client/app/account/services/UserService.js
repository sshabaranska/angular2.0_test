import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { StorageService } from './StorageService';
import { RequestService } from './RequestService';

@Injectable()
export class UserService {

  _loggedIn = new BehaviorSubject(false);

  constructor(http: Http, storage: StorageService, request: RequestService) {
    this._http = http;
    this._storage = storage;
    this._request = request;

    if (!!this._storage.getAuthToken()) {
      this._loggedIn.next(true);
    }
  }

  createUser(user) {
    return this._http
    .post('/users', JSON.stringify(user), { headers: this._request.getJsonHeaders() })
    .map(res => res.json())
      .map((res) => {
        if (res.success) {
          this._storage.setAuthToken(res.auth_token);
          this._loggedIn.next(true);
        }
        return res.success;
      });
  }

}
