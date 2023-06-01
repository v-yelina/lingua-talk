import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseOneComponent } from './components/choose-one/choose-one.component';
import { GamesComponent } from './components/games/games.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [{ path: 'main', component: MainPageComponent },
{
  path: 'games', component: GamesComponent,
},
{
  path: 'choose-one', component: ChooseOneComponent,
},
{ path: '', redirectTo: '/main', pathMatch: 'full' },
  // TODO { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
