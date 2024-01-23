// propriedades.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  template: `
    <div>
      <h3>Propriedades</h3>
      <!-- Exibir as propriedades do veículo aqui -->
    </div>
  `,
  styles: [`
    div {
      background-color: lightyellow;
      padding: 10px;
    }
  `]
})
export class PropriedadesComponent {
  // Utilize @Input para receber dados
  @Input() vehicleProperties: string[];
}
