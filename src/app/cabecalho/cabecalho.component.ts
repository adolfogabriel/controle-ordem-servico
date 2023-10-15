import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  @Input() dadosLogin: { usuario: string} | undefined;
  title = 'Controle ordem servico';

  onLinkClick() {
    alert("Obrigado "+ this.dadosLogin?.usuario +"!");
  }
}
