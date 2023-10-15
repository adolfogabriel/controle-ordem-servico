import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OsService} from "../service/os.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  dadosFormulario: FormGroup;


  constructor(private osService: OsService, private fb: FormBuilder) {
    this.dadosFormulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.pattern(/^\d{11}$/)]],
      cpf: ['', [Validators.pattern(/^\d{11}$/)]],
    });
  }

  onSubmit() {
    if (this.dadosFormulario.valid) {
      this.osService.postOs(this.dadosFormulario.value)
        .then(response => {
        console.log('Dados salvos no servidor:', response);
        this.dadosFormulario.reset();
      }).catch((error) => {
        alert('Erro na requisição:' + error);
      });
    } else {
      alert("Campos incorretos, favor verificar!")
    }
  }
}
