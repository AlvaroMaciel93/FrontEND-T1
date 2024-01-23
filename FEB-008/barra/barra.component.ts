import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraBuscaComponent {
  @Output() termoBusca = new EventEmitter<string>();
  termoPesquisa: string = '';

  realizarBusca(): void {
    this.termoBusca.emit(this.termoPesquisa);
  }
}
