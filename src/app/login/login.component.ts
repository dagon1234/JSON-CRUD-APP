import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginAsAdmin() {
    this.router.navigate(['/posts']);
  }

  loginAsUser() {
    this.router.navigate(['/posts/user']);
  }
}
