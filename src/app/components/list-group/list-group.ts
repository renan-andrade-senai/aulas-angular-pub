import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-group',
  imports: [],
  templateUrl: './list-group.html',
  styleUrl: './list-group.scss'
})
export class ListGroup {
  @Input({required: true}) items: string[] = [];
}
