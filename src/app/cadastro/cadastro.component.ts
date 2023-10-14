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
      this.osService.postOs(this.dadosFormulario.value).subscribe(response => {
        console.log('Dados salvos no servidor:', response);
        this.dadosFormulario.reset();
      });
    } else {
      // @ts-ignore
      if (this.dadosFormulario.get('nome').hasError('required')) {
        alert('O campo nome é obrigatório.');
      }
      // @ts-ignore
      if (this.dadosFormulario.get('email').hasError('required')) {
        alert('O campo email é obrigatório.');
      }
      // @ts-ignore
      if (this.dadosFormulario.get('cpf').hasError('required')) {
        alert('O campo cpf é obrigatório.');
      }
      // @ts-ignore
      if (this.dadosFormulario.get('telefone').hasError('required')) {
        alert('O campo telefone é obrigatório.');
      }
    }
  }
}
