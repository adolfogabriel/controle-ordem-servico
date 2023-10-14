import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(telefone: string): string {
    if (telefone && telefone.length === 11) {
      return `${telefone.substr(0, 2)}-${telefone.substr(2, 6)}-${telefone.substr(7)}`;
    }
    return telefone;
  }
}
