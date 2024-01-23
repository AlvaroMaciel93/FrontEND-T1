import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negrito'
})
export class NegritoPipe implements PipeTransform {
  transform(texto: string, termoPesquisa: string): string {
    if (!termoPesquisa) {
      return texto;
    }

    const regex = new RegExp(termoPesquisa, 'gi');
    return texto.replace(regex, match => `<strong>${match}</strong>`);
  }
}
