import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './signup-routing.module';
import { SignUpComponent } from './signup.component';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    DemoAngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
