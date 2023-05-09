import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch: 'full'}, // full define que não pode ter mais info apos o path
  // {path: 'portfolio', component: CardComponent, pathMatch:'prefix'}, // prefix(full) define que pode ter mais info apos o path
  {path: 'portfolio', component: CardComponent, children:[
    {path: ':id', component: CardComponent},
    {path: 'id/:token', component: CardComponent},
  ]},
  {path: '**', redirectTo:''} // Rota coringa - redireciona quando acessa rota inexistente.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
