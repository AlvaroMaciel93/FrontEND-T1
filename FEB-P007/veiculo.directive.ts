import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVeiculo]'
})
export class VeiculoDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid green');
  }
}
