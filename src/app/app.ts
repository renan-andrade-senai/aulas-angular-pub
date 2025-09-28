import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected comboValue = '0';
  protected radioValue : string | null = '';

  alterouCombo(val: string) {
    this.comboValue = val;
    console.log(this.comboValue)
  }

  alterouRadio(val: string) {
    this.radioValue = val;
  }

  getFaixa() {
    switch (this.comboValue) {
      case '1':
        return '0 - 14';
      case '2':
        return '15 - 18';
      case '3':
        return '19 - 45';
      case '4':
        return '45 - 60';
      case '5':
        return '60 +';
      default:
        return'';
    }
  }

  getGenero() {
    if (this.radioValue === 'M') 
      return 'Masculino';
    else if (this.radioValue === 'F')
      return 'Feminino';
    return '';
  }
}
