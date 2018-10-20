import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/user');
  }

  getById(id) {
    return this.http.get('/api/users/' + id);
  }

  create(user) {
    return this.http.post('/api/users', user);
  }

  update(user) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id) {
    return this.http.delete('/api/users/' + id);
  }
}
