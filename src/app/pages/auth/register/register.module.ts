import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
  ],
  declarations: [
    RegisterComponent,
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
