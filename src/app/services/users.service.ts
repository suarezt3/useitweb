import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private url: string = environment.supabaseurl; //URL para traer todos los usuarios




constructor(private http: HttpClient) { }


/**
 *
 * @returns Trae la tabla de los usuarios
 */
getUser() {
  let headers = new HttpHeaders({
    'apikey'       : environment.supabaseKey,
    'Authorization': environment.authorization
  })
   return this.http.get<any>(`${this.url}`, {headers}).pipe()
}


/**
 *
 * @returns si el usuario y el password existen realiza el login
 */
auth(user: string, password: string)  {
  let headers = new HttpHeaders({
    'apikey'       : environment.supabaseKey,
    'Authorization': environment.authorization
  })
   return this.http.get<any>(`${this.url}?user=eq.${user}&password=eq.${password}`, {headers}).pipe()
}

}
