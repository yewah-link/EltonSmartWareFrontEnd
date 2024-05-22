import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { SignUpModule } from './signup/signup.module';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'register', loadChildren: () => import('./signup/signup.module').then(m => m.SignUpModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
