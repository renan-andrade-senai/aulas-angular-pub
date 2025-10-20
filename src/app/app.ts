import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from '../shared/models/Pessoa';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Projeto } from '../shared/models/Projeto';
import { Combobox } from "./components/combobox/combobox";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Combobox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected listaStatus = ['Selecione uma opção', 'Em andamento', 'Pendente', 'Concluído'];
  protected listaPrioridade = ['Alta', 'Média', 'Baixa'];
  protected tipoPessoa = ['Física', 'Jurídica'];

  protected statusSel = 0



  
}
