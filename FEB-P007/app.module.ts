// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho.component';
import { ClassesComponent } from './classes.component';
import { ObjetosComponent } from './objetos.component';
import { PropriedadesComponent } from './propriedades.component';
import { ValorPropriedadeComponent } from './valor-propriedade.component';

import { CategoriaDirective } from './categoria.directive';
import { VeiculoDirective } from './veiculo.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    CategoriaDirective,
    VeiculoDirective
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
