import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  title = 'Controle ordem servico';
  onButtonClick() {
    alert('Botão clicado!');
  }
}
