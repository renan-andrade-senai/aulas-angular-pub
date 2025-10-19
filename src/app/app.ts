import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../shared/models/Produto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected produtos: Produto[] = [
    new Produto("Camiseta Algodão", "Malharia Sol", 150, 39.90),
    new Produto("Notebook Gamer", "Mega Informática", 12, 3499.00),
    new Produto("Fone de Ouvido Bluetooth", "TechSound", 40, 129.99),
    new Produto("Copo Térmico", "Acessórios Vip", 85, 59.90),
    new Produto("Tênis Esportivo", "Runner Shoes", 37, 219.50),
    new Produto("Jaqueta Corta Vento", "Moda Ativa", 24, 179.90),
    new Produto("Relógio Digital", "TimeLux", 16, 289.00),
    new Produto("Garrafa Squeeze", "FIT Acessórios", 58, 24.90),
    new Produto("Headset Gamer", "TechSound", 13, 359.00),
    new Produto("Livro JavaScript Básico", "Livraria Central", 33, 45.00)
  ];

  protected opcao = '0';

  reordenarLista() {
    switch (this.opcao) {
      case '1':
        this.produtos = this.produtos.sort((p1, p2) => p1.nome.localeCompare(p2.nome));
        break;
      case '2':
        this.produtos = this.produtos.sort((p1, p2) => p1.fornecedor.localeCompare(p2.fornecedor));
        break;
      case '3':
        this.produtos = this.produtos.sort((p1, p2) => p1.estoque - p2.estoque);
        break;
      case '4':
        this.produtos = this.produtos.sort((p1, p2) => p1.preco - p2.preco);
        break;
      default:
        break;
    }
  }

}
