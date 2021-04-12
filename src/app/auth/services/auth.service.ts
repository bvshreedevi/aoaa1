import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loginform } from 'src/app/shared/model/login';
import { Register } from 'src/app/shared/model/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl = 'http://localhost:3000/';
  decodedToken: any;
  isUserLogged = false;
  //currentUser: User;

  constructor(private http:HttpClient) { }

  register(registerForm:Register){
    return this.http.post(this.baseUrl + 'user/sign-up', registerForm);
  } 
  login(loginForm: Loginform) {
    return this.http.post<any>(this.baseUrl + "user/login", loginForm)
  }
 
  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  
  isUserLoggedin(){
    return this.isUserLogged;
  }
  
  logoutUser() {
    localStorage.removeItem('token')
    //this.router.navigate(['/events'])
  }

/*
  constructor() { }

  registerData;
  isUserLogged=false;
  private userName:string;

  login(userdata){
   // this.registerData=JSON.parse( localStorage.getItem("registerData"));
       
       if(userdata.value.username === "shree" && userdata.value.password === "1234"){

          this.isUserLogged=true;
          this.userName = userdata.value.username;          
          console.log("true");
          return true;
       }
       else{
        console.log("false");
         return false;
       }

  }
  
  isUserLoggedin(){
    return this.isUserLogged;
  }
  isAdminUser():boolean {
    if (this.userName=='Admin') {
        return true; 
    }
    return false;
}
  logoutUser(): void{
    this.isUserLogged = false;
}*/
}
