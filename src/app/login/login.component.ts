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
  isVisible = true;

  @Output() loginEvent = new EventEmitter<{ usuario: string }>();

  constructor( public authService: AuthService,  public router: Router) {}

  onSubmit(): void {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      this.loginEvent.emit({usuario: this.username});
      this.router.navigate(['/home']);
      this.loginError = false;
      this.isVisible = false;
      const objeto = { nome: this.username};
      localStorage.setItem('usuario', JSON.stringify(objeto));
    } else {
      const usuarioString = localStorage.getItem('usuario');
      if (usuarioString != null) {
        this.loginError = true;
      }else {
        this.loginError = true;
      }
    }
  }
}
