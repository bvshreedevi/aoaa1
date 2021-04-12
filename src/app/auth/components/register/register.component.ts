import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/helpers/confirmed.validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private authService:AuthService) { }

  registerForm:FormGroup;
  submitted = false;
  loading = false;
  message = '';
  msg = false;

  ngOnInit(): void {
    this.registerForm = this.fb.group({      
      regName:['', Validators.required],
      regUserName:['', Validators.required],
      regPwd:['', Validators.required],     
      regConfirmPwd:['', Validators.required],
      regEmail:['', Validators.required],
      regContactNum:['', Validators.required],
      regBankName:[''],
      regBankAddress:['']     

    },
    {
      validator: MustMatch('regPwd', 'regConfirmPwd')
  });
   
  }
/*
  register(){
    this.submitted = true;
    console.log(this.registerForm);
    this.loading = true;
  }
*/
  register(){
    
    
    this.authService.register(this.registerForm.value)
        .subscribe( res => { 
          console.log(res);  
          this.msg = true;      
          this.message = 'Registered Successfully!';
          this.registerForm.reset()
          this.initializeFormGroup();
        },
        err => {
          this.message = 'Not Registered';
          this.msg = false;
        }        
        
        );
  }
  clear(){
    this.registerForm.reset()
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.registerForm.setValue({      
      regName:'',
      regUserName:'',
      regPwd:'',     
      regConfirmPwd:'',
      regEmail:'',
      regContactNum:'',
      regBankName:'',
      regBankAddress:'' 
    });
  }
}
