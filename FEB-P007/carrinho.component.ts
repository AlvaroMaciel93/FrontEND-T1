// carrinho.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  template: `
    <div>
      <h2>Carrinho</h2>
      <!-- Exibir veículos selecionados aqui -->
    </div>
  `,
  styles: [`
    div {
      background-color: lightblue;
      padding: 10px;
    }
  `]
})
export class CarrinhoComponent {
  // Utilize @Input para receber dados
  @Input() selectedVehicles: any[];
}
