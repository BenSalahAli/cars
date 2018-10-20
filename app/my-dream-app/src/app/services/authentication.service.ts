import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/user', { password: username, username: username })
      .subscribe(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
         console.log('user===>',user)
        }

        return user;
      });
  }
}
