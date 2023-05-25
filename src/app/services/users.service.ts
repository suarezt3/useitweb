import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private url: string = "https://ivuzyxgtkatfcaybdlst.supabase.co/rest/v1/users"; //URL para traer todos los usuarios




constructor(private http: HttpClient) { }


/**
 *
 * @returns Trae la tabla de los clientes
 */
getUser() {
  let headers = new HttpHeaders({
    'apikey'       : environment.supabaseKey,
    'Authorization': environment.authorization
  })
   return this.http.get<any>(this.url, {headers}).pipe()
}


}
