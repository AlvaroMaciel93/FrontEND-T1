// classes.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-classes',
  template: `
    <div>
      <h2>Classes</h2>
      <!-- Exibir categorias de veículos aqui -->
    </div>
  `,
  styles: [`
    div {
      background-color: lightgreen;
      padding: 10px;
    }
  `]
})
export class ClassesComponent {
  // Utilize @Input para receber dados
  @Input() vehicleClasses: string[];
  // Utilize @Output para se comunicar com o componente pai
  @Output() classSelected = new EventEmitter<string>();
}
