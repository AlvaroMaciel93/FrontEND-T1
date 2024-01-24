
import { Component, Input } from  '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-classes></app-classes>
      <app-objects></app-objects>
      <app-carrinho></app-carrinho>
    </div>
  `,
  styles: [`
    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  `]
})

export class AppComponent {
    selectedVehicles: any[] = []; 
    vehicleClasses: string[] = ['Avioes', 'Carros', 'Barcos']; 
    allVehicles: any[] = []; 
    constructor() {
      this.allVehicles = [
        {
          name: 'Aviao',
          properties: ['Velocidade', 'Altura'];
        },
        {
          name: 'Carro',
          properties: ['Velocidade', 'Peso'];
        },
        {
            name: 'Barco',
            properties: ['Velocidade', 'Comprimento'];
        }
      ];
    }
  }
  
