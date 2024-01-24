
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valor-propriedade',
  template: `
    <div>

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
