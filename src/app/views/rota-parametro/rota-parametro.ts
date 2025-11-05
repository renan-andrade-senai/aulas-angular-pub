import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rota-parametro',
  imports: [],
  templateUrl: './rota-parametro.html',
  styleUrl: './rota-parametro.scss'
})
export class RotaParametro {

  private route = inject(ActivatedRoute);
  protected valor = this.route.snapshot.params['id'];
  

}
