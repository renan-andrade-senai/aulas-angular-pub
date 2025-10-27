import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busca',
  imports: [FormsModule],
  templateUrl: './busca.html',
  styleUrl: './busca.scss'
})
export class Busca {
  @Input({required: true}) value = '';
  @Input() placeholder = '';
  @Output() valueChange = new EventEmitter<string>();

  acionouBusca() {
    console.log(this.value)
    this.valueChange.emit(this.value);
  }
}
