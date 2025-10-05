import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected nome = '';
  protected salario = 0;
  protected reajuste = 0;

  protected nomeView = '';
  protected valorReajustadoView = 0;

  @ViewChild('re') reinput: any;

  validateMinMax(value: number) {
    if (value > 100) {
      this.reajuste = 100;
      this.reinput.nativeElement.value = 100;
    }
  }

  calcular() {
    this.nomeView = this.nome.split(' ').reverse().join(' ');
    this.valorReajustadoView = this.salario * (1 + this.reajuste / 100);
  }
}
