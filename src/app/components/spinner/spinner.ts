import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss'
})
export class Spinner {
  @Input() type = 'border';
  @Input() color = 'primary';

}
