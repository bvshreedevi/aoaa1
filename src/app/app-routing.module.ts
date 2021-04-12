import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [ 
    {
      path:'home',
      loadChildren:'./auth/auth/auth.module#AuthModule'
    },
    {
      path:'dashboard',
      //canActivate: [AuthGuardService],
      component:DashboardComponent      
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
