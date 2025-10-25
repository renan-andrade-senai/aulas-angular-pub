import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from "./components/navbar/navbar";
import { Tabela } from "./components/tabela/tabela";
import { Produto } from '../shared/models/Produto';
import { Spinner } from "./components/spinner/spinner";
import { ListGroup } from "./components/list-group/list-group";
import { InputGroup } from "./components/input-group/input-group";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Navbar, Tabela, Spinner, ListGroup, InputGroup],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected navItems = [
    {text: 'Home', status: 'active'},
    {text: 'Sobre nós', status: ''},
    {text: 'Contato', status: 'disabled'},
  ]

  protected produtos = [
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
  ]

  protected inputGroupValue = '';

}
