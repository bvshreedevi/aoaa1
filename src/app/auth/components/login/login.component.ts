import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router) {    
    } 

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email:[''],
      password:[]
    });
  }

  login(){
    console.log(this.loginform.value);
    this.authService.login(this.loginform.value).subscribe(
      res => {
        console.log(res.token);
        console.log(res);
        this.router.navigate(['/dashboard'])
        //window.localStorage.setItem('token', res.token);
        localStorage.setItem('currentUser', JSON.stringify(res.token));
        
      },
      err => {console.log(err)}
    ) 

    /*if(this.authService.login(this.loginform)){
      this.router.navigate(['/dashboard'])
    }
    else{
      this.router.navigate(['/home'])
    }
*/
  }

}
