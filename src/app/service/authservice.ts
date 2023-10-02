import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   isLoggedIn = false;

  login(username: string, password: string): boolean {
    if (username === 'adolfo' && password === '123456') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
