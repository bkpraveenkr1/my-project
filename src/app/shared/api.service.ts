import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userObj } from '../user-form/user-form.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl='http://localhost:3000/posts/';

  constructor(private http:HttpClient) { }

  postUser(data:any){
   return this.http.post<any>(this.baseUrl,data)
  }

  getUsers(){
   return this.http.get<any>(this.baseUrl)
  }

  updateUser(data:any,id:any){
    return this.http.put<any>(this.baseUrl+id,data)
  }

  deleteUser(id:any){
    return this.http.delete<any>(this.baseUrl+id)
  }
}
