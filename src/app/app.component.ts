import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonInfiniteScroll,
  IonRouterOutlet 
} from '@ionic/angular/standalone';
import { LoginModule } from './pages/auth/login/login.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    IonRouterOutlet,
    RouterOutlet,
    IonApp,
    IonInfiniteScroll,
    LoginModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'doae.app.angular';
}
