import {Component, OnInit} from '@angular/core';
import {OsService} from '../service/os.service'

@Component({
  selector: 'app-listaros',
  templateUrl: './listaros.component.html',
  styleUrls: ['./listaros.component.css']
})
export class ListarosComponent implements OnInit {
  os: any[] = [];

  constructor(private osService: OsService) {
  }

  ngOnInit() {
    this.osService.getOs()
      .then((response) => {
        this.os = response;
      })
      .catch((error) => {
        alert('Erro na requisição:' + error);
      });
  }
}
