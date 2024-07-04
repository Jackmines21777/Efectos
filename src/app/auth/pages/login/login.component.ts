import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  private readonly _router = inject(Router);


  isLoggedIn = false;
  toRouteRegister(){
    this._router.navigateByUrl('auth/dashboard/dashboard');
  }
}
