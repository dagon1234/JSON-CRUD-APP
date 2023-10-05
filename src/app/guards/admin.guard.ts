// admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if user is authenticated as admin (e.g., role in session storage or token)
    // If not, navigate to the login page
    // Return true if authorized, false otherwise
    return true; // Replace with your authentication logic
  }
}
