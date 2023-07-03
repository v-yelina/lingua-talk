import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/components/main-page/main-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [{ path: 'main', component: MainPageComponent },
{
  path: 'games', loadChildren: () => import('./games/games.module').then((m) => m.GamesModule),
},
{
  path: 'choose-one', loadChildren: () => import('./games/games.module').then((m) => m.GamesModule),
},
{ path: '', redirectTo: '/main', pathMatch: 'full' },
{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
