import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-group',
  imports: [FormsModule],
  templateUrl: './input-group.html',
  styleUrl: './input-group.scss'
})
export class InputGroup {
  @Input() inicio: string[] = []
  @Input() fim: string[] = []
  @Input() placeholder = ''
  @Input({required: true}) value = ''
  @Output() valueChange = new EventEmitter<string>();
  
  alterouValor() {
    this.valueChange.emit(this.value);
  }
}
