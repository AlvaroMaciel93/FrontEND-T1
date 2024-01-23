import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultados: string[] = [];

  constructor(private wikipediaService: WikipediaService) {}

  onTermoBusca(termo: string): void {
    this.wikipediaService.buscarArtigos(termo).subscribe(data => {
      this.resultado = data.query.search.map((item: any) => item.title);
    });
  }
}
