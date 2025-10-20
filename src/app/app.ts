import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../shared/models/Produto';
import { Projeto } from '../shared/models/Projeto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit(): void {
    this.loadPrioridades();
  }

  projetos: Projeto[] = [
    new Projeto('Automação da Esteira', 'Concluído', 'Alta'),
    new Projeto('Layout do Lab', 'Em andamento', 'Média'),
    new Projeto('Revisão Elétrica', 'Pendente', 'Alta'),
    new Projeto('Redução de Desperdício', 'Concluído', 'Baixa'),
    new Projeto('Implantação de ERP', 'Em andamento', 'Alta'),
    new Projeto('Padronização de Processo', 'Pendente', 'Média'),
    new Projeto('Treinamento de Segurança', 'Concluído', 'Média'),
    new Projeto('Monitoramento de Energia', 'Em andamento', 'Baixa'),
    new Projeto('Modernização do Almoxarifado', 'Pendente', 'Alta'),
    new Projeto('Gestão de Inventário', 'Em andamento', 'Média'),
    new Projeto('Otimização de Setup', 'Concluído', 'Alta'),
    new Projeto('Controle de Qualidade', 'Pendente', 'Baixa'),
    new Projeto('Reforma do Escritório', 'Em andamento', 'Baixa'),
    new Projeto('Atualização de Software', 'Concluído', 'Média')
  ];

  protected prioridades: {prioridade: string, qtd: number}[] = []
  protected statusCombo = ['Selecione uma opção', 'Concluído', 'Em andamento', 'Pendente']
  protected statusSelecionado = 0;

  loadPrioridades() {
    this.prioridades = [];
    this.prioridades.push({ prioridade: 'Alta', qtd: this.listaFiltrada.filter(e => e.prioridade == 'Alta').length });
    this.prioridades.push({ prioridade: 'Média', qtd: this.listaFiltrada.filter(e => e.prioridade == 'Média').length });
    this.prioridades.push({ prioridade: 'Baixa', qtd: this.listaFiltrada.filter(e => e.prioridade == 'Baixa').length });
  }

  get listaFiltrada() {
    if (this.statusSelecionado == 0) {
      return this.projetos;
    }
    return this.projetos.filter(e => e.status == this.statusCombo[this.statusSelecionado])
  }

}
