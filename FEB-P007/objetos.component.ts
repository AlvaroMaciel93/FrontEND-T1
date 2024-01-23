// objetos.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-objects',
  template: `
    <div>
      <h2>Objetos</h2>
      <!-- Exibir todos os veículos aqui -->
    </div>
  `,
  styles: [`
    div {
      background-color: lightcoral;
      padding: 10px;
    }
  `]
})
export class ObjetosComponent {
  // Utilize @Input para receber dados
  @Input() allVehicles: any[];
}
