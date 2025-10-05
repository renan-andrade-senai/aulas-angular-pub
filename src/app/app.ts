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

  protected nome2 = '';
  protected cpf = '';
  protected dtNascimento = '';
  protected email = '';
  protected senha = '';
  protected telefone = '';

  protected validacoes = '';

  salvar() {
    this.validacoes = '';
    if (!this.validaNome()) {
      this.validacoes = 'Nome é obrigatório'
    }
    if (!this.validaCpf()) {
      this.validacoes += '\nCPF inválido'
    }
    if (!this.validaData()) {
      this.validacoes += '\nData de nascimento inválida'
    }
    if (!this.validaEmail()) {
      this.validacoes += '\nEmail inválido'
    }
    if (!this.validaSenha()) {
      this.validacoes += '\nSenha inválida'
    }
    if (!this.validacoes) {
      this.validacoes = 'Tudo é valido 🎊🎊🎊🎊🚀🚀'
    }
  }

  private validaNome() {
    const i = this.nome2.indexOf(' ');
    return i > 0 && i < this.nome2.length - 1;
  }

  private validaCpf() {
    let cpf = this.cpf.replace(/\D/g, '');
    if (!cpf || cpf.length < 11) {
      return false;
    }
    let n9: string[] | number[] = cpf.slice(0, 9).split('');
    n9 = n9.map(i => parseInt(i));
    let soma = 0;
    for (let i = 0; i < n9.length; i++) {
      soma += n9[i] * (10 - i);
    }
    const fn = (s: number) => s % 11 < 2 ? 0 : 11 - (s % 11);
    n9.push(fn(soma));
    soma = 0;
    for (let i = 0; i < n9.length; i++) {
      soma += n9[i] * (11 - i);
    }
    n9.push(fn(soma));
    return cpf == n9.join('');
  }

  private validaEmail() {
    if (!this.email) {
      return false;
    }
    const iArroba = this.email.indexOf('@');
    const iPonto = this.email.indexOf('.', iArroba);
    return iArroba > 0 && iPonto > iArroba + 1;
  }

  private validaSenha() {
    if (this.senha.length < 8 || this.senha.length > 64) {
      return false;
    }
    if (!/\d/.test(this.senha) || !/[A-Z]/.test(this.senha) || !/[a-z]/.test(this.senha)) {
      return false;
    }
    return true;
  }

  private validaData() {
    const data = new Date(this.dtNascimento + 'T09:00');
    return !isNaN(data.valueOf()) && data < new Date()
  }
}
