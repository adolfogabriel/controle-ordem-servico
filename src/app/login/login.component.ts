import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../service/authservice";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  @Output() loginEvent = new EventEmitter<{ usuario: string }>();

  constructor( public authService: AuthService,  public router: Router) {}

  onSubmit(): void {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      this.loginEvent.emit({usuario: this.username});
      this.router.navigate(['/home']);
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
}
