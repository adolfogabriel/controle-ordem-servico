import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() loginEvent = new EventEmitter<{ usuario: string }>();
  username: string = '';
  password: string = '';
  mostrarComponente: boolean = true;

  constructor(private router: Router) {
  }

  onSubmit() {
    if (this.username === 'adolfo' && this.password === '123456') {
      this.mostrarComponente = false;
      this.loginEvent.emit({usuario: this.username});
      this.router.navigate(['/home']);
    } else {
      alert("Usuario ou senha incorretos")
    }
  }
}
