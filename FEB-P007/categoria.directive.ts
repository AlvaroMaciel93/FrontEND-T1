
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCategoria]'
})
export class CategoriaDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid blue');
  }
}
