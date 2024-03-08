import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { ChooseOneComponent } from './components/choose-one/choose-one.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'choose-one', component: ChooseOneComponent },
  { path: 'results', component: ResultsComponent },

];

@NgModule({
  declarations: [GamesComponent, ChooseOneComponent, ResultsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [GamesComponent, ChooseOneComponent]
})
export class GamesModule { }
