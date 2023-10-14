import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OsService} from "../service/os.service";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  osId: number | undefined;
  osDetalhes: any;

  constructor(private route: ActivatedRoute, private osService: OsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.osId = +params['id'];

      this.osService.getOsId(this.osId).subscribe(
        (response) => {
          this.osDetalhes = response;
        },
        (error) => {
          alert('Erro na requisição:' + error);
        });
    });
  }
}

