import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { ChooseOneComponent } from './components/choose-one/choose-one.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'choose-one', component: ChooseOneComponent },
];

@NgModule({
  declarations: [GamesComponent, ChooseOneComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [GamesComponent, ChooseOneComponent]
})
export class GamesModule { }
