import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseUsers, ResponseCreate, ResponseUser, RequestUpdate, User  } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }


  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  getUser(id: string): Observable<ResponseUser> {
    console.log(id)
    const _url = `${this.url}/${id}`
    console.log(_url)
    return this.http.get<ResponseUser>(_url);
  }

  updateUser(id: string, request: any) {
    return this.http.put<ResponseCreate>(this.url, request);
  }

  createUsers(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }
}
