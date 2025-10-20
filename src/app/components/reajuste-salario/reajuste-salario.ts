import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reajuste-salario',
  imports: [FormsModule],
  templateUrl: './reajuste-salario.html',
  styleUrl: './reajuste-salario.scss'
})
export class ReajusteSalario {
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
