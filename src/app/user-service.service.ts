import { Injectable } from '@angular/core';
import {Headers , Http} from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:5040/users/';
const header = {headers: new Headers ({'Content-Type': 'application/json'})};

@Injectable()
export class UserServiseService {

  constructor(private http: Http) { }
  getUsers() {
    return this.http.get(BASE_URL).map(res => res.json());
  }
  getUser(name: string, password: string) {
    return this.getUsers().map(users => {
      return users.find(users.name === name && users.password === password);
    });
  }
  updateUser(data) {
    return this.http.patch(BASE_URL + data.id, data , header).map(res => res.json());
  }
  activeUser(){
    return this.getUsers().map((users) => users.find(u => u.status === true));
  }
}
