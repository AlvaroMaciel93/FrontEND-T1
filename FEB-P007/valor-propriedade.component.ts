// valor-propriedade.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valor-propriedade',
  template: `
    <div>
      <!-- Exibir o valor da propriedade aqui -->
    </div>
  `,
  styles: [`
    div {
      background-color: lightgray;
      padding: 10px;
    }
  `]
})
export class ValorPropriedadeComponent {
  // Utilize @Input para receber dados
  @Input() propertyValue: string;
}
