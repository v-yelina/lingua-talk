import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/components/main-page/main-page.component';

const routes: Routes = [{ path: 'main', component: MainPageComponent },
{
  path: 'games', loadChildren: () => import('./games/games.module').then((m) => m.GamesModule),
},
{
  path: 'choose-one', loadChildren: () => import('./games/games.module').then((m) => m.GamesModule),
},
{ path: '', redirectTo: '/main', pathMatch: 'full' },
  // TODO { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
