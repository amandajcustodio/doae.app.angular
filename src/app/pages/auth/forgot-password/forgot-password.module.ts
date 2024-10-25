import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ForgotPasswordRoutingModule,
  ],
  declarations: [
    ForgotPasswordComponent,
  ],
  exports: [
    ForgotPasswordComponent,
  ]
})
export class ForgotPasswordModule { }
