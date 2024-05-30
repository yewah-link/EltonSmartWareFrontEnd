import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { DemoAngularMaterialModule } from '../DemoAngularMaterialModule';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DemoAngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
