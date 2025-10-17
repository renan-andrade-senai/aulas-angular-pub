import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from '../shared/models/Pessoa';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected pessoas: Pessoa[] = [
    new Pessoa('José', 38, '000000000'),
    new Pessoa('Maria', 32, '11111'),
    new Pessoa('Ronaldo', 40, '22222'),
  ];

  protected pessoaEdicao = new Pessoa();

  
}
