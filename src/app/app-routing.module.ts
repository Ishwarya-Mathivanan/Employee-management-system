import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { HRdashboardComponent } from './component/hrdashboard/hrdashboard.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path: 'user', component: EmployeeDashboardComponent},
  {path: 'admin', component: HRdashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
