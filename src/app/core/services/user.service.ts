// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any>('https://randomuser.me/api/0.8/?results=10').pipe(
      map(response => response.results)
    );
  }
}
