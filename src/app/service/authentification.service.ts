import { user } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { of } from 'rxjs';
import { UUID } from 'angular2-uuid';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public users:user[]=[];

  public authentificateUser :user  | undefined; 

  constructor() { 
    this.users = [
      {userId:UUID.UUID(),userName:"badr1",password:"12345",roles:["USER"]},
      {userId:UUID.UUID(),userName:"badr",password:"12345",roles:["USER","ADMIN"]},
      {userId:UUID.UUID(),userName:"badr2",password:"12345",roles:["ADMIN"]}
    ];
  }

  public connect(userName: string , password:string):Observable<user> {
    let appuser = this.users.find(u=> u.userName == userName);
    if(!appuser){
      return throwError("Not found 404");
    }
    if(password != appuser.password){
      return throwError(new Error("bad credentail"));
    }
    return of(appuser);
  }

  public authentificate(appUser :user):Observable<boolean>{
    this.authentificateUser = appUser;
    localStorage.setItem("autUser",JSON.stringify(
      {userName:appUser.userName, password:appUser.password,roles:appUser.roles,jwt:"JWB_TOKEN"}
      ));
      return of(true);
  }

  public isAdmin(role :string):boolean{
    return this.authentificateUser!.roles.includes(role)
  }

  public isauthentificated(){
    return this.authentificateUser != undefined;
  }

  public logOut():Observable<boolean>{
    this.authentificateUser = undefined;
    localStorage.removeItem("autUser");
    return of(true);
  }
}
