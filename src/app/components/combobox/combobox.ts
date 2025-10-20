import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-combobox',
  imports: [FormsModule],
  templateUrl: './combobox.html',
  styleUrl: './combobox.scss'
})
export class Combobox {
  @Input() label = 'Combo';
  @Input({required: true}) options: string[] = [];
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  mudouValor() {
    this.valueChange.emit(this.value);
  }

}
