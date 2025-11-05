import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  imports: [FormsModule],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.scss'
})
export class PaginaInicial {

  private router = inject(Router);

  protected param = ''

  navigateToParametro() {
    this.router.navigate(['/parametro',this.param])
  }



}
