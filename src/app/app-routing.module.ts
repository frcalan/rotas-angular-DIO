import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch: 'full'}, // full define que não pode ter mais info apos o path
  {path: 'portfolio', component: CardComponent, pathMatch:'prefix'} // prefix define que pode ter mais info apos o path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
