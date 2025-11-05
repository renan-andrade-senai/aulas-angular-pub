import { Routes } from '@angular/router';
import { PaginaInicial } from './views/pagina-inicial/pagina-inicial';
import { Spinner } from './components/spinner/spinner';
import { NotFound } from './views/not-found/not-found';
import { RotaParametro } from './views/rota-parametro/rota-parametro';

export const routes: Routes = [
    {path: '', component: PaginaInicial},
    {path: 'parametro/:id', component: RotaParametro},
    {path: 'teste', component: Spinner},
    {path: '**', component: NotFound},
];
