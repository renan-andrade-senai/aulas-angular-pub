import { KeyValuePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela',
  imports: [KeyValuePipe],
  templateUrl: './tabela.html',
  styleUrl: './tabela.scss'
})
export class Tabela {
  @Input({required: true}) cols: string[] = [];
  @Input({required: true}) rows: any[] = [];
}
