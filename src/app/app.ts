import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from "./components/navbar/navbar";
import { Jogador } from '../shared/models/Jogador';
import { CardJogador } from "./components/card-jogador/card-jogador";
import { Busca } from "./components/busca/busca";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Navbar, CardJogador, Busca],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected busca = '';

  protected posFiltros = [
    {nome: 'GOL', selecionado: false},
    {nome: 'ATA', selecionado: false},
    {nome: 'LAT', selecionado: false},
    {nome: 'MEI', selecionado: false},
    {nome: 'ZAG', selecionado: false},
  ]

  jogadores = [
    new Jogador('Adriano', 41, 10, 'ATA', 'adriano.jpg'),
    new Jogador('Ronaldo', 45, 9, 'ATA', 'ronaldo.jpg'),
    new Jogador('Cristiano Ronaldo', 39, 7, 'ATA', 'cr7.jpg'),
    new Jogador('Balotelli', 34, 45, 'ATA', 'balotelli.jpg'),
    new Jogador('Seedorf', 48, 10, 'MEI', 'seedorf.jpg'),
    new Jogador('Renato', 44, 8, 'MEI', 'renato.jpg'),
    new Jogador('O Bruxo', 45, 10, 'MEI', 'bruxo.jpg'),
    new Jogador('Bebeto', 59, 20, 'ATA', 'bebeto.jpg'),
    new Jogador('Freky', 27, 13, 'ATA', 'freky.avif'),
    new Jogador('Catjam', 23, 17, 'MEI', 'catjam.avif'),
    new Jogador('Hackermans', 29, 4, 'ZAG', 'hackermans.avif'),
    new Jogador('Benzema', 38, 9, 'ATA', 'benzema.jpg'),
    new Jogador('Kahn', 56, 1, 'GOL', 'kahn.jpg'),
    new Jogador('Pelé', 82, 10, 'ATA', 'rei.jpg'),
    new Jogador('Buffon', 47, 1, 'GOL', 'buffon.jpg'),
    new Jogador('Roberto Carlos', 52, 6, 'LAT', 'r6.jpg'),
    new Jogador('Taffarel', 59, 12, 'GOL', 'taffarel.jpg'),
    new Jogador('Maradona', 63, 10, 'MEI', 'maradona.jpg')
  ];

  escalados: Jogador[] = [];

  get jogadoresFiltro() {
    let lista = this.jogadores;
    if (this.busca) {
      lista = lista.filter(j => j.nome.toUpperCase().includes(this.busca.toUpperCase()))
    }
    if (this.posFiltros.some(f => f.selecionado)) {
      lista = lista.filter(j => this.posFiltros.some(f => f.nome == j.posicao && f.selecionado));
    }
    if (this.escalados.length > 0) {
      lista = lista.filter(j => !this.escalados.includes(j));
    }
    return lista;
  }

  escalouJogador(jogador: Jogador) {
    this.escalados.push(jogador);
  }

  removeuJogador(jogador: Jogador) {
    let i = this.escalados.indexOf(jogador);
    this.escalados.splice(i, 1);
  }

  navItems = [
    {text: 'Home', status: 'active'},
    {text: 'Contato', status: ''},
    {text: 'Sobre nós', status: ''},
    {text: 'Inscreva-se', status: 'disabled'}
  ]


}
