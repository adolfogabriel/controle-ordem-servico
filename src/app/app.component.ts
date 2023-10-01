import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadosLogin: { usuario: string } | undefined;

  onLogin(data: { usuario: string }) {
    this.dadosLogin = data;
  }
}
