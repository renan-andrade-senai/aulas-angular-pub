import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jogador } from '../../../shared/models/Jogador';

@Component({
  selector: 'app-card-jogador',
  imports: [],
  templateUrl: './card-jogador.html',
  styleUrl: './card-jogador.scss'
})
export class CardJogador {
  @Input({required: true}) jogador = {} as Jogador;
  @Output() escalar = new EventEmitter<Jogador>();

  escalou() {
    this.escalar.emit(this.jogador);
  }
}
